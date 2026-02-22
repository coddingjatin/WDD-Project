let Subtraction = ({numbers}) =>{
    return(
        <div className="bg-blue-100 p-4 rounded-lg text-center">
            <p className="text-blue-800 font-semibold">{numbers[1]} - {numbers[0]} = {numbers[1] - numbers[0]}</p>
        </div>
    )
}

export default Subtraction;