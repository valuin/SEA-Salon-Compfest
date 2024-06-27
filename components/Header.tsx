import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import HeaderPic from "../public/headerPic.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="absolute ml-96 mt-4 px-32 hidden md:block">
        <Image
          alt="header"
          src="/headerPic.jpg"
          objectFit="cover"
          width={300}
          height={300}
          className="h-full w-full rounded-xl"
        />
      </div>
      <p className="font-rosarivo font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !leading-tight max-w-xl text-center md:mr-96 text-neutral-950">
        Beauty
      </p>
      <p className="font-rosarivo font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl !leading-tight max-w-xl mt-8 text-center  md:mr-72 text-neutral-950">
        and
      </p>
      <p className="font-rosarivo font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !leading-tight max-w-xl  mt-4 text-center text-neutral-950">
        Elegance
      </p>
      <p className="font-rosarivo-italic flex font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl !leading-tight max-w-xl mt-8 p-3 md:ml-72 text-center text-redText">
        Redefined
      </p>
      <div className="absolute md:mt-96 md:px-12 md:py-12 md:mr-176 hidden md:block">
        <Image
          alt="header"
          src="/header2.jpg"
          objectFit="contain"
          width={300}
          height={300}
          className="h-full w-full rounded-xl"
        />
      </div>
    </div>
  );
}
