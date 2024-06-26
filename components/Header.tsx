import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import HeaderPic from "../public/headerPic.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
        <div className="absolute ml-96 mt-4">
            <Image
              alt="header"
              src="/headerPic.jpg"
              objectFit="cover"
              width={300}
              height={300}
              className="h-full w-full rounded-xl"
            />
        </div>
      <p className="font-rosarivo font-semibold text-3xl lg:text-8xl !leading-tight max-w-xl mr-128 text-center text-neutral-950">
        Beauty
      </p>
      <p className="font-rosarivo font-semibold text-3xl lg:text-6xl !leading-tight max-w-xl mr-72 mt-8 text-center text-neutral-950">
        and
      </p>
      <p className="font-rosarivo font-semibold text-3xl lg:text-8xl !leading-tight max-w-xl mr-8 mt-4 text-center text-neutral-950">
        Elegance
      </p>
      <p className="font-rosarivo-italic font-semibold text-3xl lg:text-8xl !leading-tight max-w-xl ml-96 mt-8 text-center text-redText">
        Redefined
      </p>
      <div className="absolute mt-96 p-8 mr-128">
            <Image
              alt="header"
              src="/header2.jpg"
              objectFit="cover"
              width={300}
              height={300}
              className="h-full w-full rounded-xl"
            />
        </div>
    </div>
  );
}
