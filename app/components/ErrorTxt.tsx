interface ErrorTxtProps {
  errorTxt: string;
}

export default function ErrorTxt({ errorTxt }: ErrorTxtProps) {
  return <div className="text-red-500">{errorTxt}</div>;
}
