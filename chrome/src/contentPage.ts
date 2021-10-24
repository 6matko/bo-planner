chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    console.log(`Request to content page:`, request);
    switch (request) {
      case 'getInfoFromPage':
        // Getting information about current Steam Item
        const itemInfo = getItemInfo();
        resolve(itemInfo);
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
    itemInfo['pageUrl'] = window.location.href;

    // Setting information about active buy order
    setActiveBuyOrderInfo(itemInfo);

    // If we found breadcrumbs then getting name from it and assigning to resulting object
    if (breadcrumbs?.length) {
      const lastItemIndex = document.querySelectorAll('.market_listing_nav')[0].children.length - 1;
      itemInfo['itemName'] = document.querySelectorAll('.market_listing_nav')[0].children[lastItemIndex].textContent;
    }
  } catch (error) {
    // On error clearing result item info to indicate that something was wrong
    itemInfo = {};
  }

  return itemInfo;
}

function setActiveBuyOrderInfo(itemInfo) {
  // Getting active buy order element. If there are no activee buy orders then it will be empty
  const activeBuyOrders = document.querySelectorAll('div[id^=mybuyorder_]');
  if (activeBuyOrders?.length) {
    // Removing quantity element from price column.
    // Otherwise we are getting "1000.03" if cause it displays as 1000 @ 0.03.
    // NOTE: We need to check if that quantity exists because on new popover opening it might be 
    // const mobileQuantity = activeBuyOrders[0].children[2].getElementsByClassName('market_listing_inline_buyorder_qty');
    // if (mobileQuantity.length) {
    //   activeBuyOrders[0].children[2].getElementsByClassName('market_listing_inline_buyorder_qty')[0].remove();
    // }

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
