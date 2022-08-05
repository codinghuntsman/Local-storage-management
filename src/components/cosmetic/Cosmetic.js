import React from 'react';
import { deleteShoppingCart, fakeDb, removeFromDb } from '../Utilities/Utilities';

const Cosmetic = ({ cosmetic }) => {

    const { name, color, id } = cosmetic;

    const addToDb = (id) => {
        fakeDb(id)
    };

    //---------------Remove from DB with one---------------
    const deleteFromDb = (id) => {
        removeFromDb(id)
    };

    //--------Delete whole shopping cart from local storage------------
    const deleteWholeShoppingCartFromDb = (id) => {
        deleteShoppingCart(id)
    };
    return (
        <div>
            <h2>name: {name}</h2>
            <h4>color: {color}</h4>
            <p>ID: {id}</p>
            <button onClick={() => addToDb(id)}>Add To Local Storage</button>
            <button onClick={() => deleteFromDb(id)}>Delete from Local Storage</button>
            <button onClick={() => deleteWholeShoppingCartFromDb(id)}>DeleteShoppingCart</button>
        </div>
    );
};

export default Cosmetic;