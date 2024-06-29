"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleClicked = () => {
    router.push("/reservation");
  };
  return (
    <div className="flex flex-col items-center w-full animate-fadeIn">
        <div className="absolute ml-144 mt-4 px-32 hidden md:block animate-fadeIn">
          <Image
            alt="header"
            src="/headerPic.jpg"
            objectFit="cover"
            width={300}
            height={300}
            className="h-full w-full rounded-xl"
          />
        </div>
        <p className="font-rosarivo font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !leading-tight max-w-xl text-center md:mr-96 text-neutral-950 animate-fadeIn delay-1">
          Beauty
        </p>
        <p className="font-rosarivo font-semibold text-2xl sm:text-4xl !leading-tight max-w-xl mt-8 mb-2 text-center md:mr-72 text-neutral-950 animate-fadeIn delay-2">
          and
        </p>
        <p className="font-rosarivo font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !leading-tight max-w-xl mt-8 text-center text-neutral-950 animate-fadeIn delay-3">
          Elegance
        </p>
        <p className="font-rosarivo-italic flex font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl !leading-tight max-w-xl mt-8 p-3 md:ml-72 text-center text-redText animate-fadeIn delay-4">
          Redefined
        </p>
        <div className="absolute md:mt-72 md:px-16 md:py-12 md:mr-192 hidden md:block animate-fadeIn">
          <Image
            alt="header"
            src="/header3.jpg"
            objectFit="contain"
            width={250}
            height={250}
            className="h-full w-full rounded-xl"
          />
        </div>
      <button
        type="submit"
        className="bg-neutral-950 text-primary font-semibold px-32 py-4 mt-4 mb-8 rounded transition-all duration-300 ease-in-out hover:bg-redText hover:-translate-y-1 hover:shadow-lg hover:shadow-redText/50 active:scale-90"
        onClick={handleClicked}
      >
        Book Now
      </button>
      <p className="text-neutral-950 text-3xl mt-6 font-semibold font-rosarivo text-center justify-center" id="services-section">
        Where Every Visit is Heaven on Earth
      </p>
    </div>
  );
}
