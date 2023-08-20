let totalPrice = 0;
const couponInput = document.getElementById('coupon-input');
const couponApply = document.getElementById('coupon-apply');

function setProductTitleInTheCart(target) {
    const selectedProductList = document.getElementById('selected-product-list');
    const productTitle = document.createElement('li');

    productTitle.classList.add('cart-typo');
    productTitle.innerText = target.childNodes[5].innerText;
    selectedProductList.appendChild(productTitle);


    const ProductPrice = target.childNodes[7].childNodes[0].innerText;
    totalPrice = totalPrice + parseFloat(ProductPrice);

    const oldTotal = document.getElementById('total-price');
    oldTotal.innerText = totalPrice;

    if (oldTotal.innerText > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
    }

}


couponInput.addEventListener('keyup', function () {
    if (couponInput.value === 'SELL200' && totalPrice > 200) {
        couponApply.removeAttribute('disabled')
    }else{
        couponApply.setAttribute('disabled', true)
    }
})

couponApply.addEventListener('click', function () {
    // if (totalPrice < 200) {
    //     alert('You have to shop at least 200 TK');
    //     return;
    // } else {
    //     couponApply.removeAttribute('disabled')
    // }

    const discount = document.getElementById('discount')
    const discountedTotal = document.getElementById('discounted-total')

    const finalDiscount = (20 / 100) * totalPrice;
    discount.innerText = finalDiscount.toFixed(2);

    const finalDiscountedTotal = totalPrice - finalDiscount;
    discountedTotal.innerText = finalDiscountedTotal.toFixed(2);
})