function setProductTitleInTheCart(target) {
    const selectedProductList = document.getElementById('selected-product-list');
    const productTitle = document.createElement('li');
    productTitle.classList.add('cart-typo')
    productTitle.innerText = target.childNodes[5].innerText;
    selectedProductList.appendChild(productTitle);
}