const coursesList = document.querySelector('.coursers-list');
const counter = document.querySelector('.counter');

function createCart() {
    // Lista produktów
    const items = [];
    
    const refreshProductsCount = () => {
        counter.innerText = items.length;
    }
    
    const addToCart = (title, price, quantity = 1) => { // parametry
        console.log(title, price, quantity);
        items.push({
            title,
            price: price, // dłuszy zapis
            quantity,//skrócony zapis
        });
        refreshProductsCount();
        console.log(items);
    }
    return {
        add: addToCart
    }
}

const cart = createCart();
// console.log(cart);

// funkcja która obsłuy kolor buttona
const addClass = (className, text) => {
    return (element) => {
        element.classList.add(className);
        element.innerText = text;
    }
}

// obsługa buttona
// funkcja "addToCartHandler" jest wywoływana natychmiast zanim zostanie wywołana funkcja "addClass(e.target);"
const addToCartHandler = (e) => {
    const addClassInCart = addClass('in-cart', 'Dodano'); 
    if (e.target.tagName === 'BUTTON') {
        const price = Number(e.target.dataset.price);
        const title = e.target.dataset.title;
        cart.add(e.target.dataset.title, price); // argumenty
        addClassInCart(e.target);        
    }
}

coursesList.addEventListener('click', addToCartHandler);