const CustomInput = ({ type, name, placeholder, value, onChange, onBlur }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="form-control"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};
    export default CustomInput;