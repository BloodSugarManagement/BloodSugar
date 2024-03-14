export default function SocialBtn({ imgNme }: any) {
  const backgroundImage = `url('/image/${imgNme}.svg')`;

  const handleSocialLogin = async (socialType: string) => {
    if (socialType === "kakao") {
      const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
      const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

      try {
        window.location.href = KAKAO_AUTH_URL;
      } catch (error: any) {
        console.log(error.message);
      }
    } else if (socialType === "google") {
      const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
      const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=email profile`;

      try {
        window.location.href = GOOGLE_AUTH_URL;
      } catch (error: any) {
        console.log(error.message);
      }
    } else if (socialType === "naver") {
      const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
      const REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
      const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=STATE_STRING&redirect_uri=${REDIRECT_URI}`;

      try {
        window.location.href = NAVER_AUTH_URL;
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
