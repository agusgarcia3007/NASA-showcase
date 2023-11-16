import { Button } from "@nextui-org/react";
import { RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-4rem)] w-screen relative">
      <Image
        src="/assets/img/blackhole.png"
        alt="Black hole"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
      <section className="absolute flex flex-col gap-y-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-3xl whitespace-nowrap sm:text-5xl capitalize sm:my-5">
          You fell into a blackhole
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <p className="text-4xl">Page not found</p>
        <div className="mt-6 sm:mt-0">
          <Link href="/">
            <Button endContent={<RocketLaunch />} color="primary">
              Back to Earth
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
