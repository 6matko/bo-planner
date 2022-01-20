/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./chrome/src/bo-modal.ts ***!
  \********************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vY2hyb21lL3NyYy9iby1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUF1RDs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMsUyIsImZpbGUiOiJib01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlzdGVuaW5nIGZvciBtZXNzYWdlc1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBXZSBvbmx5IGFjY2VwdCBtZXNzYWdlcyBmcm9tIG91cnNlbHZlc1xyXG4gICAgaWYgKGV2ZW50LnNvdXJjZSAhPSB3aW5kb3cpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW5nIG9ubHkgb24gb3VyIGN1c3RvbSBidXkgb3JkZXIgbWVzc2FnZSB0eXBlXHJcbiAgICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIChldmVudC5kYXRhLnR5cGUgPT0gXCJCVVlfT1JERVJcIikpIHtcclxuICAgICAgICAvLyBTdG9yaW5nIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBmb3IgcXVpY2sgYWNjZXNzXHJcbiAgICAgICAgY29uc3QgeyBhcHBJZCwgaXRlbU5hbWUsIHByaWNlLCBhbW91bnQsIGlzQnV5T3JkZXJNb2RhbFNob3duIH0gPSBldmVudC5kYXRhO1xyXG5cclxuICAgICAgICAvLyBPcGVuaW5nIGJ1eSBvcmRlciBtb2RhbCBpZiBpdHMgeWV0IG5vdCBvcGVuZWRcclxuICAgICAgICBpZiAoIWlzQnV5T3JkZXJNb2RhbFNob3duKSB7XHJcbiAgICAgICAgICAgIE1hcmtldF9TaG93QnV5T3JkZXJQb3B1cChldmVudC5kYXRhLmFwcElkLCBldmVudC5kYXRhLml0ZW1OYW1lLCBldmVudC5kYXRhLml0ZW1OYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdpdGggdGltZW91dCBkaXJ0eSB0cmljayB3ZSBhcmUgZ3VhcmFudGVlaW5nIHRoYXQgdGhpcyBjb2RlIHdpbGwgZXhlY3V0ZSBhcyBsYXRlIGFzIHBvc3NpYmxlLlxyXG4gICAgICAgIC8vIEluIG91ciBjYXNlIHRoaXMgaXMgbmVlZGVkIHRvIGd1YXJhbnRlZSBtb2RhbCB3aW5kb3cgdG8gYXBwZWFyXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0aW5nIHByaWNlICYgcXVhbnRpdHkgaW5wdXRzIChPbmx5IGlmIHByaWNlICYgYW1vdW50IGFyZSBwcmVzZW50IHdpdGggcmVjZWl2ZWQgbWVzc2FnZSlcclxuICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2V0X2J1eV9jb21tb2RpdHlfaW5wdXRfcHJpY2UnKS52YWx1ZSA9IHByaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXRfYnV5X2NvbW1vZGl0eV9pbnB1dF9xdWFudGl0eScpLnZhbHVlID0gYW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxsaW5nIFN0ZWFtJ3MgbmF0aXZlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0b3RhbCB2YWx1ZSBiYXNlZCBvbiBvdXIgY3VzdG9tIHZhbHVlcy5cclxuICAgICAgICAgICAgLy8gRG9pbmcgdGhpc3Mgb25seSBpbiBjYXNlIGlmIHdlIGhhdmUgY3VzdG9tIHByaWNlIG9yIGFtb3VudCB0byBhdm9pZCBleHRyYSBjYWxsIGZvciBubyByZWFzb25cclxuICAgICAgICAgICAgaWYgKHByaWNlIHx8IGFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlQnV5T3JkZXJEaWFsb2cuVXBkYXRlVG90YWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59LCBmYWxzZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==