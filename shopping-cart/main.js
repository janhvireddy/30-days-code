let shop = document.getElementById("shop");

//every time u select any card its gonna store inside basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, description, price, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `<div class="item" id=product-id-${id}>
    <img width="222" src=${img} alt="img1">
    <div class="details">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i class="bi bi-dash-lg" onclick="decrement(${id})"></i>
                <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
                <i class="bi bi-plus-lg" onclick="increment(${id})"></i>
            </div>
        </div>
    </div>
</div>`;
    })
    .join(""));
};
generateShop();

//increment the item
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

//calculation
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0); //reduce is for decrease the item num
};
calculation();

//regular function
//function abcd(){}
