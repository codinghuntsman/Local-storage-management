
const fakeDb = (id) => {

    let shoppingCart = {};

    //-----Get shopping cart from local storage--------------
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    //---------Add shopping Cart in the local storage------------
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

    //---------This is another way to add shopping cart in  Local Storage------------
    // const quantity = localStorage.getItem(id);
    // if (quantity) {
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id, newQuantity);
    // }
    // else {
    //     localStorage.setItem(id, 1)
    // }
};
// ----------------------------//--------------------------------------

//------------Delete shopping cart from local storage---------
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
};

//------------------------Reducer---------------------
const getTotalPrice = (cosmetic) => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetic.reduce(reducer, 0)
    return total;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { fakeDb, removeFromDb, deleteShoppingCart, getTotalPrice };