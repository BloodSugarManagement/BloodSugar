"use client";

interface AuthInputProps {
  name: string;
  htmlFor: string;
  id: string;
  labelTxt: string;
  placeholder: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AuthInput(props: AuthInputProps) {
  const {
    name,
    htmlFor,
    id,
    labelTxt,
    placeholder,
    type = "text",
    value,
    onChange,
    ...restProps
  } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="text-base block font-medium mb-2">
        {labelTxt}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        className="rounded-xl w-80 h-11 block border-2 border-main-gray pl-3 mb-8"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </>
  );
}
