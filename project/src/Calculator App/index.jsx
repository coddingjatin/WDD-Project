//Calculator App
import React, { useState } from 'react';
import Add from './Add';
import Subtraction from './subtraction';

let Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const numbers = [num1, num2];
    
    return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Calculator</h1>
            <div className="space-y-4 mb-6">
                <input 
                    type="number" 
                    placeholder="First Number" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                />
                <input 
                    type="number" 
                    placeholder="Second Number" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />
            </div>
            <div className="space-y-4">
                <Add numbers={numbers}/>
                <Subtraction numbers={numbers}/>
            </div>
        </div>
    </div>
    )   
}
export default Calculator;
