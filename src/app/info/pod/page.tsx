import { picturesApi } from "@/api";
import Image from "next/image";

export default async function Info() {
  const data = await picturesApi.getPod();

  return (
    <article className="text-3xl p-5 min-h-[calc(100vh-4rem)]">
      <div className="flex w-full items-center justify-between sm:gap-x-5 py-2">
        <Image
          src={data.url}
          alt={data.title}
          width={410}
          height={600}
          draggable={false}
          className="w-1/2 h-1/2 am:w-full sm:h-full rounded-xl shadow-lg object-cover min-w-[8rem]"
        />
        <aside className="flex flex-col gap-y-1.5 p-2 w-full">
          <h3 className="text-2xl sm:text-3xl font-semibold">{data.title}</h3>
          <p className="text-sm sm:text-lg text-gray-300">{data.copyright}</p>
          <p className="text-gray-500 text-xs sm:text-base">{data.date}</p>
          <p className="hidden sm:block text-sm sm:text-lg my-5">
            {data.explanation}
          </p>
        </aside>
      </div>
      <p className="text-sm sm:hidden">{data.explanation}</p>
    </article>
  );
}
