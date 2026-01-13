import Image from "next/image";
import LogoImg from "../../public/assets/Neatly_Logo.png";

export default function LandingPage() {
  return (
    <>
      <div>
        <div>
          <Image src={LogoImg} alt="Logo Img" />
        </div>
        <div></div>
      </div>
    </>
  );
}
