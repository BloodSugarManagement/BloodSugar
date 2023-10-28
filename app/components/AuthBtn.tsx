interface AuthBtnProps {
  btnTxt: string;
}

export default function AuthBtn({ btnTxt }: AuthBtnProps) {
  return (
    <button className="w-80 h-14 bg-sub-gray rounded-full text-white font-semibold text-lg">
      {btnTxt}
    </button>
  );
}
