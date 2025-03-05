const Input = (props) => {
    return (
        <input
            className=" bg-slate-100 p-3 rounded-md text-black focus:outline-none focus:border-none focus:bg-white"
            {...props}
        />
    );
}

export default Input;