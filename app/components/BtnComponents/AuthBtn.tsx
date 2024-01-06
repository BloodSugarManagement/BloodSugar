interface AuthBtnProps {
  btnTxt: string;
  disabled: boolean;
}

export default function AuthBtn({ btnTxt, disabled }: AuthBtnProps) {
  return (
    <button
      className={`w-80 h-14 rounded-full text-white font-semibold text-lg mt-8
              ${!disabled ? "bg-main-red opacity-80" : "bg-sub-gray"}
              disabled:opacity-50`}
      disabled={disabled}
    >
      {btnTxt}
    </button>
  );
}
