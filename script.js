let cart = [];

function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    alert(`${itemName} has been added to your cart.`);
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');
            addToCart(itemName, itemPrice);
        });
    });
});
