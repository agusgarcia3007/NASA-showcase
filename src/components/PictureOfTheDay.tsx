import { picturesApi } from "@/api";
import { Link } from "@nextui-org/react";
import { CaretDoubleDown, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function PictureOfTheDay() {
  const data = await picturesApi.getPod();

  return (
    <picture className="w-screen h-[calc(100vh-4rem)] relative">
      <section className="absolute bottom-4 left-4 flex flex-col gap-y-1.5">
        <h3 className="text-3xl font-semibold">Picture of the Day</h3>
        <p className="text-lg">{data.title}</p>
        <Link href="/info/pod" className="text-gray-400" underline="hover">
          Read more <CaretRight />
        </Link>
        <p className="text-gray-500">{data.copyright}</p>
      </section>
      <Image
        src={data.hdurl}
        alt={data.title}
        width={2048}
        height={1024}
        priority
        draggable={false}
        className="w-full h-full object-cover max-h-[calc(100vh-4rem)]"
      />
      <CaretDoubleDown
        className="absolute bottom-4 text-6xl left-1/2 text-white animate-bounce hidden sm:block"
        weight="bold"
      />
    </picture>
  );
}
