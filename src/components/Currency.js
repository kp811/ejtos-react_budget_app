import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [currencyText, setNewCurrencyText] = useState("£ Pound");

    return (
        <div class="dropdown">
            <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currencyText})
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">$ Dollar</button></li>
                <li><button class="dropdown-item" type="button">£ Pound</button></li>
                <li><button class="dropdown-item" type="button">€ Euro</button></li>
                <li><button class="dropdown-item" type="button">₹ Ruppee</button></li>
            </ul>
        </div>
    );
};
export default Currency;