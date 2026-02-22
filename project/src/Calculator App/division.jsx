let Division = ({numbers}) => {
    return (
        <div className="bg-green-100 p-4 rounded-lg text-center">
        <p className="text-green-800 font-semibold">
            Division: {numbers[0]} / {numbers[1]} = {numbers[1] !== 0 ? (numbers[0] / numbers[1]) : 'Error: Division by zero'}
        </p>
        </div>
    )
}

export default Division;