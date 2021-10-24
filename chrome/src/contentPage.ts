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

  itemInfo['pageUrl'] = window.location.href;

  // If we found breadcrumbs then getting name from it and assigning to resulting object
  if (breadcrumbs?.length) {
    const lastItemIndex = document.querySelectorAll('.market_listing_nav')[0].children.length - 1;
    itemInfo['itemName'] = document.querySelectorAll('.market_listing_nav')[0].children[lastItemIndex].textContent;
  }
  return itemInfo;
}
