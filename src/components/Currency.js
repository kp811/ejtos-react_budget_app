import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch } = useContext(AppContext);
    const [currencyText, setNewCurrencyText] = useState("£ Pound");

    const changeCurrency = (event) => {
        setNewCurrencyText(event.target.id);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.id[0],
        })
    }

    return (
        <div class="dropdown">
            <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currencyText})
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" id="$ Dollar" type="button" onClick={(event => changeCurrency(event))}>$ Dollar</button></li>
                <li><button class="dropdown-item" id="£ Pound" type="button" onClick={(event => changeCurrency(event))}>£ Pound</button></li>
                <li><button class="dropdown-item" id="€ Euro" type="button" onClick={(event => changeCurrency(event))}>€ Euro</button></li>
                <li><button class="dropdown-item" id="₹ Ruppee" type="button" onClick={(event => changeCurrency(event))}>₹ Ruppee</button></li>
            </ul>
        </div>
    );
};
export default Currency;