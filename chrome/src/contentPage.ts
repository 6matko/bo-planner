
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
        // Adding our custom script to page ONLY if its yet not added
        if (!document.scripts.namedItem('openBO')) {
          const localFileURL = chrome.runtime.getURL('boModal.js');
          const myScript = document.createElement('script');
          myScript.id = 'openBO';
          myScript.src = localFileURL;
          document.head.appendChild(myScript);
        }

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

    // Storing link to image (used for display)
    itemInfo['imgUrl'] = document.querySelector('.market_listing_largeimage img')?.src;

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
