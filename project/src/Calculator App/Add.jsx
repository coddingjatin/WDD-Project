
let Add = ({numbers}) => {
    return (
      <div className="bg-green-100 p-4 rounded-lg text-center">
        <p className="text-green-800 font-semibold">
          Addition: {numbers[0]} + {numbers[1]} = {numbers[0] + numbers[1]}
        </p>
      </div>  
    );
}

export default Add;