// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector("input").value;
  const realPrice = parseFloat(price.innerHTML);
  const realQuantity = parseInt(quantity);
  const result = realPrice * quantity;
  let subtotal = product.querySelector(".subtotal span")
  return subtotal.innerHTML= parseFloat(result);
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const totalProducts = document.getElementsByClassName('product');
  const totalArray = [];
  for (products of totalProducts) {
    totalArray.push(updateSubtotal(products));
  }

   

  
  //updateSubtotal(allProducts);


  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  const subtotalValue = totalArray.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);
  console.log(subtotalValue);
  totalValue.innerHTML = subtotalValue;
  return subtotalValue;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
