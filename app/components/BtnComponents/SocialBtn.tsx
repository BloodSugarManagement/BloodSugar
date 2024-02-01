export default function SocialBtn({ imgNme }: any) {
  const backgroundImage = `url('/image/${imgNme}.svg')`;

  const handleSocialLogin = async (socialType: string) => {
    if (socialType === "kakao") {
      const REST_API_KEY = process.env.KAKAO_REST_API_KEY;
      const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
      `;
      try {
        window.location.href = KAKAO_AUTH_URL;
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {/*<button className={`w-[55px] h-[55px] bg-${imgNme}`}></button>*/}
      <button
        className="w-[55px] h-[55px] bg-cover bg-center"
        style={{ backgroundImage }}
        onClick={() => handleSocialLogin(imgNme)}
      ></button>
    </>
  );
}
