import { marsApi } from "@/api/mars";
import { Container } from "@/components";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default async function Rovers() {
  const photos = await marsApi.getRoverPhotos({
    sol: 1000,
  });

  return (
    <Container>
      <Container.Title uppercase size="large">
        Mars <p className="text-gray-400 text-sm">Photos by Rovers</p>
      </Container.Title>
      <Container.Grid>
        {photos.map((photo) => (
          <Link href={`/mars/rovers/${photo.id}`} key={photo.id}>
            <Image
              isZoomed
              src={photo.img_src}
              alt={`image ${photo.id}`}
              loading="lazy"
              width={375}
              height={250}
              className="w-full h-64 object-cover  cursor-pointer"
              radius="lg"
              shadow="lg"
              draggable={false}
            />
          </Link>
        ))}
      </Container.Grid>
    </Container>
  );
}
