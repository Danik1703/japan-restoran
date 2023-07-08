const menu = document.getElementById("menu");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const overlay = document.getElementById("overlay");
const closeButton = document.querySelector(".close");
const checkoutButton = document.getElementById("checkout-button");

if (menu && cartButton && cartModal && cartItems && overlay && closeButton && checkoutButton) {

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.classList.contains("add-to-cart")) {
      const menuItem = event.target.closest("li");
      if (menuItem) {
        const itemName = menuItem.querySelector("h3")?.textContent;
        const itemPrice = menuItem.querySelector(".price")?.textContent;

        if (itemName && itemPrice) {
         
          const cartItem = document.createElement("li");
          cartItem.textContent = `${itemName} - ${itemPrice}`;

   
          cartItems.appendChild(cartItem);

    
          const popup = document.createElement("div");
          popup.classList.add("popup");
          popup.textContent = "Товар успешно добавлен в корзину";
          document.body.appendChild(popup);

          setTimeout(() => {
            popup.remove();
          }, 3000);
        }
      }
    }
  });


  cartButton.addEventListener("click", () => {
    cartModal.style.display = "block";
    overlay.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    cartModal.style.display = "none";
    overlay.style.display = "none";
  });

  checkoutButton.addEventListener("click", () => {
  });
}
