const Card = ({ name, description }) => {
    const isAuth = localStorage.getItem('auth')
    const disabled = !isAuth

    return (
        <div className="max-w-md mx-auto bg-white white:bg-gray-800 shadow-md rounded-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white-800 black:text-white">{name}</h2>
                <p className="text-black-600 dark:text-black-300">{description}</p>
            </div>
            <div className="flex justify-between p-6">
                <button onClick={() => { alert("Added to Deals") }}
                    className={`text-primary-600  border border-primary-600 hover:text-gray-600 hover:bg-primary-600 px-4 py-2 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {"Add to Deals"}

                </button>
                <button onClick={() => { alert("Check Details") }}
                    className={`text-primary-600  border border-primary-600 hover:text-gray-600 hover:bg-primary-600 px-4 py-2 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {"Check Details"}
                </button>
            </div>
        </div >
    );
};

export default Card;

// className="text-primary-600  border border-primary-600 hover:text-gray-600 hover:bg-primary-600 px-4 py-2 rounded-md"