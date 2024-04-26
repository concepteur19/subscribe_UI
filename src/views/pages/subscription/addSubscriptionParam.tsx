import React from 'react';
import Input from '../../components/basis/Input';

const AddSubscriptionParam = () => {
    return (
        <div>
            <Input 
                inputType='date'
                inputClass=' bg-black-2 fontRedRoseB leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 hidden'
                placeholder=' Select date'
            />

            <div className="flex justify-between">
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default AddSubscriptionParam;
