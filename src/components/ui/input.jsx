// Input.js

export const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className,
    error,
    disabled,
    required,
    readOnly,
    ...props
}) => {
    return (
        <div className={`flex flex-col  mb-4 ${className}`}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-60 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-200' : ''} ${readOnly ? 'bg-gray-100' : ''}`}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                {...props}
            />
            {error && <span className="text-red-500 p-1 text-sm">{error}</span>}
        </div>
    );
};
