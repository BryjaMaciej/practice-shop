const counterList = document.querySelector(".coursers-list");

const array = [];

const addToCart = (title, price, quantity = 1) => {
    array.push(
        {
            title,
            price,
            quantity,
        }
    )
    console.log(array);
}

const addToCardHandle = (e) => {
    if (e.target.tagName === 'BUTTON') {

        const price = Number(e.target.dataset.price)
        const title = e.target.dataset.title
        console.log(title, price)

        addToCart(title, price);
    }


}

counterList.addEventListener('click', addToCardHandle);