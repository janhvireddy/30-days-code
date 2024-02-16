let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];
//calculation
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0); //reduce is for decrease the item num
};
calculation();
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
      console.log(x);
      let { id, item } = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      console.log(search);
      return `<div class="cart-item">
      <img width="200"src=${search.img} alt="shirt">
      <div class="details">
        
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="cart-buttons">
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
      </div>`;
    }));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is empty</h2>
   <a href="index.html">
    <button class="Homebtn">Back to home</button> </a> 
    `;
  }
};
generateCartItems();
