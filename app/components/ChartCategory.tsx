import { Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  className?: string;
  setter: Dispatch<SetStateAction<string>>;
}

export default function ChartCategory({ name, className, setter }: Props) {
  return (
    <li className="text-xs bg-sub-gray rounded-full w-fit">
      <button className={className} onClick={() => setter(name)}>
        {name}
      </button>
    </li>
  );
}
