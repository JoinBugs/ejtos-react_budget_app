import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const currencies = {
        '$': 'Dolar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Ruppee',
    };
    const onClickItem = (key) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: key
        });
        //setNewCurrency(key);
    };

    const getItemsCurrencies = () => {
        let items = [];
        for(let key in currencies) {
            items.push(<li key={key}><a onClick={()=> {onClickItem(key)}} 
                        class="dropdown-item" href="#">{`${key} ${currencies[key]}`}</a></li>);
        }
        return items;
    };

    return (
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" 
                type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {`${currency} ${currencies[currency]}`}
        </button>
        <ul class="dropdown-menu">
            {getItemsCurrencies()}
        </ul>
        </div>
    );
};
export default Currency;