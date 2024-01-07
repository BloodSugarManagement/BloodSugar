interface TitleTxtProps {
  titleTxt: string;
}

export default function TitleTxt({ titleTxt }: TitleTxtProps) {
  return (
    <h1 className={`mt-8 mb-8 text-xl font-extrabold text-center`}>
      {titleTxt}
    </h1>
  );
}
