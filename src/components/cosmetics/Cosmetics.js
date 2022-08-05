import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';
import { getTotalPrice } from '../Utilities/Utilities';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    //-----------Reducer method----------------
    const total = getTotalPrice(cosmetics)
    return (
        <div>
            <h1>Welcome to cosmetic shop</h1>
            <p>Total Money need: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;