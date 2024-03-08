
const AlertBox = ({ type, message }) => {
    console.log(type, message);
    const alertClasses = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black',
    };

    const alertClass = alertClasses[type] || alertClasses.info;

    return (
        <div className={`py-3 px-4 rounded-md ${alertClass}`}>
            {message}
        </div>
    );
};

export default AlertBox;
