//Calculator App
import React, { useState } from 'react';
import Add from './Add';
import Subtraction from './subtraction';
    let numbers = [10,20];
let Calculator = () => {
return (
    
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Simple Calculator</h1>
        <div className="flex space-x-2 mb-4">
            <input type="number" placeholder="First Number" className="border p-2 rounded" />
            <input type="number" placeholder="Second Number" className="border p-2 rounded" />
        </div>
        <Add data={numbers}/>
        <Subtraction data={numbers}/>
        </div>
)   
}
export default Calculator;