import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const MAX = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let val = event.target.value,
            remaining = val - totalExpenses;
        if(val < totalExpenses) {
            alert(`You cannot reduce the badge value lower than the spending`);
        }
        else if(val > MAX) {
            alert(`The value cannot exceed remaining funds £${remaining}`);
        }
        else {
            setNewBudget(val);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;