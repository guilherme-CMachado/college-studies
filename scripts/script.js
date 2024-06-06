document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });
    }

    if (document.getElementById('contactForm')) {
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Mensagem enviada com sucesso!');
        });
    }

    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});

function addToCart(button, burgerName) {
    const burgerImage = button.closest('.burger').querySelector('img').src;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: burgerName, image: burgerImage });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    button.textContent = "Adicionado";
    button.disabled = true;
    button.style.backgroundColor = "#6c757d";
}

function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `Carrinho (${cart.length})`;
    cartIcon.classList.remove('hidden');
    cartIcon.style.display = 'block';
}

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'cart-item-details';
        
        const h3 = document.createElement('h3');
        h3.textContent = item.name;
        
        detailsDiv.appendChild(h3);
        
        li.appendChild(img);
        li.appendChild(detailsDiv);
        
        cartItems.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartIcon();
    displayCartItems();
}
