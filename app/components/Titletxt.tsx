interface TitleTxtProps {
  titleTxt: string;
  center?: "text-center" | null;
}

export default function TitleTxt({
  titleTxt,
  center = "text-center",
}: TitleTxtProps) {
  return (
    <h1 className={`mt-12 mb-12 text-xl font-extrabold ${center}`}>
      {titleTxt}
    </h1>
  );
}
