import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

interface Props extends InputHTMLAttributes<{}> {
  text: string;
}

export default function ChartCategory({ id, name, text, ...props }: Props) {
  return (
    <li>
      <input
        id={id}
        name={name}
        value={id}
        className="peer"
        type="radio"
        hidden
      />
      <label
        htmlFor={id}
        className="peer-checked:bg-[#F5F0D4] block text-xs bg-sub-gray rounded-full w-[66px] h-[25px] leading-[25px] text-center"
        {...props}
      >
        {text}
      </label>
    </li>
  );
}
