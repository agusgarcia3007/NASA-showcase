import { picturesApi } from "@/api";
import { Link } from "@nextui-org/react";
import { CaretDoubleDown, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export const preload = () => {
  picturesApi.getPod();
};
export default async function PictureOfTheDay() {
  const data = await picturesApi.getPod();

  return (
    <picture className="w-screen h-[calc(100vh-4rem)] relative 2xl:flex 2xl:justify-center ">
      <div className="absolute w-full h-full bg-gradient-to-t from-primary to-transparent z-50" />
      <section className="absolute bottom-4 left-4 2xl:left-72 flex flex-col gap-y-1.5 z-50 ">
        <h3 className="text-3xl 2xl:text-5xl font-semibold">
          Picture of the Day
        </h3>
        <p className="text-lg 2xl:text-2xl">{data.title}</p>
        <Link
          href="/info/pod"
          className="text-gray-400 2xl:text-lg"
          underline="hover"
        >
          Read more <CaretRight />
        </Link>
        <p className="text-gray-500">{data.copyright}</p>
      </section>
      <Image
        src={data.hdurl}
        alt={data.title}
        width={2048}
        height={1024}
        draggable={false}
        className="w-screen h-full object-cover max-h-[calc(100vh-4rem)]"
      />
      <CaretDoubleDown
        className="absolute z-50 bottom-4 text-6xl left-1/2 text-white animate-bounce hidden sm:block"
        weight="bold"
      />
    </picture>
  );
}
