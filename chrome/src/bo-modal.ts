// Listening for messages
window.addEventListener("message", (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
        return;
    }

    // Acting only on our custom buy order message type
    if (event.data.type && (event.data.type == "BUY_ORDER")) {
        // Storing necessary information for quick access
        const { appId, itemName, price, amount, isBuyOrderModalShown } = event.data;

        // Opening buy order modal if its yet not opened
        if (!isBuyOrderModalShown) {
            Market_ShowBuyOrderPopup(event.data.appId, event.data.itemName, event.data.itemName);
        }

        // With timeout dirty trick we are guaranteeing that this code will execute as late as possible.
        // In our case this is needed to guarantee modal window to appear
        setTimeout(function () {
            // Updating price & quantity inputs (Only if price & amount are present with received message)
            if (price) {
                document.getElementById('market_buy_commodity_input_price').value = price;
            }
            if (amount) {
                document.getElementById('market_buy_commodity_input_quantity').value = amount;
            }

            // Calling Steam's native function to update total value based on our custom values.
            // Doing thiss only in case if we have custom price or amount to avoid extra call for no reason
            if (price || amount) {
                CreateBuyOrderDialog.UpdateTotal();
            }
        }, 0);
    }
}, false);