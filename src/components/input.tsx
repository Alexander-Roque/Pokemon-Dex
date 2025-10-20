const Input = ({id, name, type, value, onChange, placeholder, label}) => {
    return (
        <div>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
    )
}

export default Input