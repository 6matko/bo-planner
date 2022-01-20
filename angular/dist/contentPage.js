/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./chrome/src/contentPage.ts ***!
  \***********************************/

chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    console.log(`Request to content page:`, request);
    // Getting information about current Steam Item
    const itemInfo = getItemInfo();
    switch (request.type) {
      case 'getInfoFromPage':
        resolve(itemInfo);
        break;
      case 'openBOModal':
        addCustomScript();
        // Sending message for listener (defined in boModal.js).
        // With timeout we are telling for this code to execute as late as possible so listener would have
        // time to initialize
        setTimeout(function () {
          console.log('SENDING MESSAGE');
          // Posting message so this information would appear in modal
          window.postMessage({
            type: 'BUY_ORDER',
            appId: itemInfo['appId'],
            itemName: itemInfo['itemName'],
            price: request.data.price,
            amount: request.data.amount,
            // Checking if there is already an active (opened) modal for placing buy order.
            // This is needed for case where modal is already opened and to provide value "update"
            // ability instead of closing/opening again
            isBuyOrderModalShown: !!document.querySelector('.newmodal[data-panel]'),
          }, '*');
        }, 0);
        break;
      default:
        reject('Something went wrong');
        break;
    }
  });

  handler.then(message => respond(message)).catch(error => respond(error));
  return true;
});



function addCustomScript() {
  // Adding our custom script to page ONLY if its yet not added
  if (!document.scripts.namedItem('openBO')) {
    const localFileURL = chrome.runtime.getURL('boModal.js');
    const myScript = document.createElement('script');
    myScript.id = 'openBO';
    myScript.src = localFileURL;
    document.head.appendChild(myScript);
  }
}

/**
 * Method gathers required information about Steam Item
 *
 * @return {*} Returns filled object with information. If nothing was found it will return empty object
 */
function getItemInfo() {
  const breadcrumbs = document.querySelectorAll('.market_listing_nav');
  // Empty object with information about item
  let itemInfo = {};

  try {
    // Storing current page URL to make sure we are on SCM
    itemInfo['pageUrl'] = window.location.href;

    itemInfo['currencyId'] = getCurrencyIdFromPage();

    // Getting url with app id from navigation (its always first element) for quick access
    const urlWithAppId = document.querySelector('.market_listing_nav a').href;
    // Converting URL string to URL object and getting "appid" param.
    // With "+" converting it to number because we know its numeric value
    itemInfo['appId'] = +new URL(urlWithAppId).searchParams.get('appid');

    // Setting information about active buy order
    setActiveBuyOrderInfo(itemInfo);

    // If we found breadcrumbs then getting name from it and assigning to resulting object
    if (breadcrumbs?.length) {
      // NOTE: Getting only that breadcrumb which includes link to listing page
      itemInfo['itemName'] = document.querySelectorAll('.market_listing_nav a[href^="https://steamcommunity.com/market/listings/"]')[0]?.textContent;
    }
  } catch (error) {
    // On error clearing result item info to indicate that something was wrong
    itemInfo = {};
  }

  return itemInfo;
}

/**
 * Method updates current item information object with information about active buy orders
 *
 * @param {*} itemInfo Current steam item information. This object will be updated
 */
function setActiveBuyOrderInfo(itemInfo) {
  // Getting active buy order element. If there are no activee buy orders then it will be empty
  const activeBuyOrders = document.querySelectorAll('div[id^=mybuyorder_]');
  if (activeBuyOrders?.length) {
    // Getting current active buy order amount (And converting from string to number)
    const activeBOAmount = +activeBuyOrders[0].children[3].textContent;

    // Finding element with price and replacing "1000 @" or what ever amount there is to get only price
    const currencyString = activeBuyOrders[0].children[2]
      .getElementsByClassName('market_listing_price')[0].textContent.replace(`${activeBOAmount} @`, '')
      // Additionally removing all line breaks and tabs to get only value with currency
      .replace(/(\\r\\n|\\n|\\r|\\t)/gm, '');
    // Getting current activee buy order price
    const activeBOPrice = getNumericPrice(currencyString);

    // Storing information about active buy order to resulting info object
    itemInfo['activeBOPrice'] = activeBOPrice;
    itemInfo['activeBOPriceString'] = currencyString;
    itemInfo['activeBOAmount'] = activeBOAmount;
  }
}

/**
 * Method extractss numeric value from currency string. For example, from "0,03€" to "0.03"
 *
 * @param {string} currencyString Currency string from which numeric value should be extracted
 * @return {number} Returns numeric value of provided currency string
 */
function getNumericPrice(currencyString) {
  // Replacing "," with "." because in some cases currencies are "0,03€" and in others "$0.05".
  // We need string to contain only dots instead of commas. Also removing "--" if price is "105,--" or like that
  currencyString = currencyString.replace(',', '.').replace('--', '');

  // Converting currency string to numeric value
  // Src: https://stackoverflow.com/a/559178
  return Number(currencyString.replace(/[^0-9.-]+/g, ''));
}

/**
 * Method finds ID of wallet currency from inline script
 *
 * @return {number} Returns currency ID of current user that is found in inline script (as global variable)
 */
function getCurrencyIdFromPage() {
  // Resulting currency ID
  let currencyId;

  // Getting list of all scripts on page because we need to find
  // information about current currency from there. Otherwise we would need to
  // access those values via window postMessage & listeners. So far its the best
  // way I could think of
  const allScripts = document.querySelectorAll('script');
  allScripts.forEach(elem => {
    // Searching for the one that has information about currency
    if (elem.innerText.includes('"wallet_currency"')) {
      // Using RegExp to get string that matches our requirements
      const regExp = new RegExp(/wallet_currency":[0-9]{1,}/, 'g');
      const foundString = elem.innerText.match(regExp);
      // If we have matching string then replacing all extra stuff by
      // leaving only ID which is as string and with "+" we convert it to numeric value
      if (foundString?.length) {
        currencyId = +foundString[0].replace('wallet_currency":', '');
      }
    }
  });
  return currencyId;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vY2hyb21lL3NyYy9jb250ZW50UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRixlQUFlO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxHQUFHO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoiY29udGVudFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCByZXNwb25kKSA9PiB7XG4gIGNvbnN0IGhhbmRsZXIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3QgdG8gY29udGVudCBwYWdlOmAsIHJlcXVlc3QpO1xuICAgIC8vIEdldHRpbmcgaW5mb3JtYXRpb24gYWJvdXQgY3VycmVudCBTdGVhbSBJdGVtXG4gICAgY29uc3QgaXRlbUluZm8gPSBnZXRJdGVtSW5mbygpO1xuICAgIHN3aXRjaCAocmVxdWVzdC50eXBlKSB7XG4gICAgICBjYXNlICdnZXRJbmZvRnJvbVBhZ2UnOlxuICAgICAgICByZXNvbHZlKGl0ZW1JbmZvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcGVuQk9Nb2RhbCc6XG4gICAgICAgIGFkZEN1c3RvbVNjcmlwdCgpO1xuICAgICAgICAvLyBTZW5kaW5nIG1lc3NhZ2UgZm9yIGxpc3RlbmVyIChkZWZpbmVkIGluIGJvTW9kYWwuanMpLlxuICAgICAgICAvLyBXaXRoIHRpbWVvdXQgd2UgYXJlIHRlbGxpbmcgZm9yIHRoaXMgY29kZSB0byBleGVjdXRlIGFzIGxhdGUgYXMgcG9zc2libGUgc28gbGlzdGVuZXIgd291bGQgaGF2ZVxuICAgICAgICAvLyB0aW1lIHRvIGluaXRpYWxpemVcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1NFTkRJTkcgTUVTU0FHRScpO1xuICAgICAgICAgIC8vIFBvc3RpbmcgbWVzc2FnZSBzbyB0aGlzIGluZm9ybWF0aW9uIHdvdWxkIGFwcGVhciBpbiBtb2RhbFxuICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnQlVZX09SREVSJyxcbiAgICAgICAgICAgIGFwcElkOiBpdGVtSW5mb1snYXBwSWQnXSxcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBpdGVtSW5mb1snaXRlbU5hbWUnXSxcbiAgICAgICAgICAgIHByaWNlOiByZXF1ZXN0LmRhdGEucHJpY2UsXG4gICAgICAgICAgICBhbW91bnQ6IHJlcXVlc3QuZGF0YS5hbW91bnQsXG4gICAgICAgICAgICAvLyBDaGVja2luZyBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGFjdGl2ZSAob3BlbmVkKSBtb2RhbCBmb3IgcGxhY2luZyBidXkgb3JkZXIuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCBmb3IgY2FzZSB3aGVyZSBtb2RhbCBpcyBhbHJlYWR5IG9wZW5lZCBhbmQgdG8gcHJvdmlkZSB2YWx1ZSBcInVwZGF0ZVwiXG4gICAgICAgICAgICAvLyBhYmlsaXR5IGluc3RlYWQgb2YgY2xvc2luZy9vcGVuaW5nIGFnYWluXG4gICAgICAgICAgICBpc0J1eU9yZGVyTW9kYWxTaG93bjogISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3bW9kYWxbZGF0YS1wYW5lbF0nKSxcbiAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZWplY3QoJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgaGFuZGxlci50aGVuKG1lc3NhZ2UgPT4gcmVzcG9uZChtZXNzYWdlKSkuY2F0Y2goZXJyb3IgPT4gcmVzcG9uZChlcnJvcikpO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gYWRkQ3VzdG9tU2NyaXB0KCkge1xuICAvLyBBZGRpbmcgb3VyIGN1c3RvbSBzY3JpcHQgdG8gcGFnZSBPTkxZIGlmIGl0cyB5ZXQgbm90IGFkZGVkXG4gIGlmICghZG9jdW1lbnQuc2NyaXB0cy5uYW1lZEl0ZW0oJ29wZW5CTycpKSB7XG4gICAgY29uc3QgbG9jYWxGaWxlVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdib01vZGFsLmpzJyk7XG4gICAgY29uc3QgbXlTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBteVNjcmlwdC5pZCA9ICdvcGVuQk8nO1xuICAgIG15U2NyaXB0LnNyYyA9IGxvY2FsRmlsZVVSTDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG15U2NyaXB0KTtcbiAgfVxufVxuXG4vKipcbiAqIE1ldGhvZCBnYXRoZXJzIHJlcXVpcmVkIGluZm9ybWF0aW9uIGFib3V0IFN0ZWFtIEl0ZW1cbiAqXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGZpbGxlZCBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbi4gSWYgbm90aGluZyB3YXMgZm91bmQgaXQgd2lsbCByZXR1cm4gZW1wdHkgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEl0ZW1JbmZvKCkge1xuICBjb25zdCBicmVhZGNydW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXJrZXRfbGlzdGluZ19uYXYnKTtcbiAgLy8gRW1wdHkgb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgaXRlbVxuICBsZXQgaXRlbUluZm8gPSB7fTtcblxuICB0cnkge1xuICAgIC8vIFN0b3JpbmcgY3VycmVudCBwYWdlIFVSTCB0byBtYWtlIHN1cmUgd2UgYXJlIG9uIFNDTVxuICAgIGl0ZW1JbmZvWydwYWdlVXJsJ10gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgIGl0ZW1JbmZvWydjdXJyZW5jeUlkJ10gPSBnZXRDdXJyZW5jeUlkRnJvbVBhZ2UoKTtcblxuICAgIC8vIEdldHRpbmcgdXJsIHdpdGggYXBwIGlkIGZyb20gbmF2aWdhdGlvbiAoaXRzIGFsd2F5cyBmaXJzdCBlbGVtZW50KSBmb3IgcXVpY2sgYWNjZXNzXG4gICAgY29uc3QgdXJsV2l0aEFwcElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcmtldF9saXN0aW5nX25hdiBhJykuaHJlZjtcbiAgICAvLyBDb252ZXJ0aW5nIFVSTCBzdHJpbmcgdG8gVVJMIG9iamVjdCBhbmQgZ2V0dGluZyBcImFwcGlkXCIgcGFyYW0uXG4gICAgLy8gV2l0aCBcIitcIiBjb252ZXJ0aW5nIGl0IHRvIG51bWJlciBiZWNhdXNlIHdlIGtub3cgaXRzIG51bWVyaWMgdmFsdWVcbiAgICBpdGVtSW5mb1snYXBwSWQnXSA9ICtuZXcgVVJMKHVybFdpdGhBcHBJZCkuc2VhcmNoUGFyYW1zLmdldCgnYXBwaWQnKTtcblxuICAgIC8vIFNldHRpbmcgaW5mb3JtYXRpb24gYWJvdXQgYWN0aXZlIGJ1eSBvcmRlclxuICAgIHNldEFjdGl2ZUJ1eU9yZGVySW5mbyhpdGVtSW5mbyk7XG5cbiAgICAvLyBJZiB3ZSBmb3VuZCBicmVhZGNydW1icyB0aGVuIGdldHRpbmcgbmFtZSBmcm9tIGl0IGFuZCBhc3NpZ25pbmcgdG8gcmVzdWx0aW5nIG9iamVjdFxuICAgIGlmIChicmVhZGNydW1icz8ubGVuZ3RoKSB7XG4gICAgICAvLyBOT1RFOiBHZXR0aW5nIG9ubHkgdGhhdCBicmVhZGNydW1iIHdoaWNoIGluY2x1ZGVzIGxpbmsgdG8gbGlzdGluZyBwYWdlXG4gICAgICBpdGVtSW5mb1snaXRlbU5hbWUnXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXJrZXRfbGlzdGluZ19uYXYgYVtocmVmXj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL21hcmtldC9saXN0aW5ncy9cIl0nKVswXT8udGV4dENvbnRlbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIE9uIGVycm9yIGNsZWFyaW5nIHJlc3VsdCBpdGVtIGluZm8gdG8gaW5kaWNhdGUgdGhhdCBzb21ldGhpbmcgd2FzIHdyb25nXG4gICAgaXRlbUluZm8gPSB7fTtcbiAgfVxuXG4gIHJldHVybiBpdGVtSW5mbztcbn1cblxuLyoqXG4gKiBNZXRob2QgdXBkYXRlcyBjdXJyZW50IGl0ZW0gaW5mb3JtYXRpb24gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgYWN0aXZlIGJ1eSBvcmRlcnNcbiAqXG4gKiBAcGFyYW0geyp9IGl0ZW1JbmZvIEN1cnJlbnQgc3RlYW0gaXRlbSBpbmZvcm1hdGlvbi4gVGhpcyBvYmplY3Qgd2lsbCBiZSB1cGRhdGVkXG4gKi9cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1eU9yZGVySW5mbyhpdGVtSW5mbykge1xuICAvLyBHZXR0aW5nIGFjdGl2ZSBidXkgb3JkZXIgZWxlbWVudC4gSWYgdGhlcmUgYXJlIG5vIGFjdGl2ZWUgYnV5IG9yZGVycyB0aGVuIGl0IHdpbGwgYmUgZW1wdHlcbiAgY29uc3QgYWN0aXZlQnV5T3JkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2lkXj1teWJ1eW9yZGVyX10nKTtcbiAgaWYgKGFjdGl2ZUJ1eU9yZGVycz8ubGVuZ3RoKSB7XG4gICAgLy8gR2V0dGluZyBjdXJyZW50IGFjdGl2ZSBidXkgb3JkZXIgYW1vdW50IChBbmQgY29udmVydGluZyBmcm9tIHN0cmluZyB0byBudW1iZXIpXG4gICAgY29uc3QgYWN0aXZlQk9BbW91bnQgPSArYWN0aXZlQnV5T3JkZXJzWzBdLmNoaWxkcmVuWzNdLnRleHRDb250ZW50O1xuXG4gICAgLy8gRmluZGluZyBlbGVtZW50IHdpdGggcHJpY2UgYW5kIHJlcGxhY2luZyBcIjEwMDAgQFwiIG9yIHdoYXQgZXZlciBhbW91bnQgdGhlcmUgaXMgdG8gZ2V0IG9ubHkgcHJpY2VcbiAgICBjb25zdCBjdXJyZW5jeVN0cmluZyA9IGFjdGl2ZUJ1eU9yZGVyc1swXS5jaGlsZHJlblsyXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtldF9saXN0aW5nX3ByaWNlJylbMF0udGV4dENvbnRlbnQucmVwbGFjZShgJHthY3RpdmVCT0Ftb3VudH0gQGAsICcnKVxuICAgICAgLy8gQWRkaXRpb25hbGx5IHJlbW92aW5nIGFsbCBsaW5lIGJyZWFrcyBhbmQgdGFicyB0byBnZXQgb25seSB2YWx1ZSB3aXRoIGN1cnJlbmN5XG4gICAgICAucmVwbGFjZSgvKFxcXFxyXFxcXG58XFxcXG58XFxcXHJ8XFxcXHQpL2dtLCAnJyk7XG4gICAgLy8gR2V0dGluZyBjdXJyZW50IGFjdGl2ZWUgYnV5IG9yZGVyIHByaWNlXG4gICAgY29uc3QgYWN0aXZlQk9QcmljZSA9IGdldE51bWVyaWNQcmljZShjdXJyZW5jeVN0cmluZyk7XG5cbiAgICAvLyBTdG9yaW5nIGluZm9ybWF0aW9uIGFib3V0IGFjdGl2ZSBidXkgb3JkZXIgdG8gcmVzdWx0aW5nIGluZm8gb2JqZWN0XG4gICAgaXRlbUluZm9bJ2FjdGl2ZUJPUHJpY2UnXSA9IGFjdGl2ZUJPUHJpY2U7XG4gICAgaXRlbUluZm9bJ2FjdGl2ZUJPUHJpY2VTdHJpbmcnXSA9IGN1cnJlbmN5U3RyaW5nO1xuICAgIGl0ZW1JbmZvWydhY3RpdmVCT0Ftb3VudCddID0gYWN0aXZlQk9BbW91bnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXRob2QgZXh0cmFjdHNzIG51bWVyaWMgdmFsdWUgZnJvbSBjdXJyZW5jeSBzdHJpbmcuIEZvciBleGFtcGxlLCBmcm9tIFwiMCwwM+KCrFwiIHRvIFwiMC4wM1wiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbmN5U3RyaW5nIEN1cnJlbmN5IHN0cmluZyBmcm9tIHdoaWNoIG51bWVyaWMgdmFsdWUgc2hvdWxkIGJlIGV4dHJhY3RlZFxuICogQHJldHVybiB7bnVtYmVyfSBSZXR1cm5zIG51bWVyaWMgdmFsdWUgb2YgcHJvdmlkZWQgY3VycmVuY3kgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldE51bWVyaWNQcmljZShjdXJyZW5jeVN0cmluZykge1xuICAvLyBSZXBsYWNpbmcgXCIsXCIgd2l0aCBcIi5cIiBiZWNhdXNlIGluIHNvbWUgY2FzZXMgY3VycmVuY2llcyBhcmUgXCIwLDAz4oKsXCIgYW5kIGluIG90aGVycyBcIiQwLjA1XCIuXG4gIC8vIFdlIG5lZWQgc3RyaW5nIHRvIGNvbnRhaW4gb25seSBkb3RzIGluc3RlYWQgb2YgY29tbWFzLiBBbHNvIHJlbW92aW5nIFwiLS1cIiBpZiBwcmljZSBpcyBcIjEwNSwtLVwiIG9yIGxpa2UgdGhhdFxuICBjdXJyZW5jeVN0cmluZyA9IGN1cnJlbmN5U3RyaW5nLnJlcGxhY2UoJywnLCAnLicpLnJlcGxhY2UoJy0tJywgJycpO1xuXG4gIC8vIENvbnZlcnRpbmcgY3VycmVuY3kgc3RyaW5nIHRvIG51bWVyaWMgdmFsdWVcbiAgLy8gU3JjOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTU5MTc4XG4gIHJldHVybiBOdW1iZXIoY3VycmVuY3lTdHJpbmcucmVwbGFjZSgvW14wLTkuLV0rL2csICcnKSk7XG59XG5cbi8qKlxuICogTWV0aG9kIGZpbmRzIElEIG9mIHdhbGxldCBjdXJyZW5jeSBmcm9tIGlubGluZSBzY3JpcHRcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJldHVybnMgY3VycmVuY3kgSUQgb2YgY3VycmVudCB1c2VyIHRoYXQgaXMgZm91bmQgaW4gaW5saW5lIHNjcmlwdCAoYXMgZ2xvYmFsIHZhcmlhYmxlKVxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW5jeUlkRnJvbVBhZ2UoKSB7XG4gIC8vIFJlc3VsdGluZyBjdXJyZW5jeSBJRFxuICBsZXQgY3VycmVuY3lJZDtcblxuICAvLyBHZXR0aW5nIGxpc3Qgb2YgYWxsIHNjcmlwdHMgb24gcGFnZSBiZWNhdXNlIHdlIG5lZWQgdG8gZmluZFxuICAvLyBpbmZvcm1hdGlvbiBhYm91dCBjdXJyZW50IGN1cnJlbmN5IGZyb20gdGhlcmUuIE90aGVyd2lzZSB3ZSB3b3VsZCBuZWVkIHRvXG4gIC8vIGFjY2VzcyB0aG9zZSB2YWx1ZXMgdmlhIHdpbmRvdyBwb3N0TWVzc2FnZSAmIGxpc3RlbmVycy4gU28gZmFyIGl0cyB0aGUgYmVzdFxuICAvLyB3YXkgSSBjb3VsZCB0aGluayBvZlxuICBjb25zdCBhbGxTY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gIGFsbFNjcmlwdHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAvLyBTZWFyY2hpbmcgZm9yIHRoZSBvbmUgdGhhdCBoYXMgaW5mb3JtYXRpb24gYWJvdXQgY3VycmVuY3lcbiAgICBpZiAoZWxlbS5pbm5lclRleHQuaW5jbHVkZXMoJ1wid2FsbGV0X2N1cnJlbmN5XCInKSkge1xuICAgICAgLy8gVXNpbmcgUmVnRXhwIHRvIGdldCBzdHJpbmcgdGhhdCBtYXRjaGVzIG91ciByZXF1aXJlbWVudHNcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoL3dhbGxldF9jdXJyZW5jeVwiOlswLTldezEsfS8sICdnJyk7XG4gICAgICBjb25zdCBmb3VuZFN0cmluZyA9IGVsZW0uaW5uZXJUZXh0Lm1hdGNoKHJlZ0V4cCk7XG4gICAgICAvLyBJZiB3ZSBoYXZlIG1hdGNoaW5nIHN0cmluZyB0aGVuIHJlcGxhY2luZyBhbGwgZXh0cmEgc3R1ZmYgYnlcbiAgICAgIC8vIGxlYXZpbmcgb25seSBJRCB3aGljaCBpcyBhcyBzdHJpbmcgYW5kIHdpdGggXCIrXCIgd2UgY29udmVydCBpdCB0byBudW1lcmljIHZhbHVlXG4gICAgICBpZiAoZm91bmRTdHJpbmc/Lmxlbmd0aCkge1xuICAgICAgICBjdXJyZW5jeUlkID0gK2ZvdW5kU3RyaW5nWzBdLnJlcGxhY2UoJ3dhbGxldF9jdXJyZW5jeVwiOicsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY3VycmVuY3lJZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=