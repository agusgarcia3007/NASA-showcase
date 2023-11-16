import { marsApi } from "@/api/mars";
import { Container } from "@/components";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export default async function Mars() {
  const photos = await marsApi.getRoverPhotos({
    sol: 1000,
  });

  const firstPhotos = photos.slice(0, 8);
  return (
    <Container>
      <Container.Title
        uppercase
        size="large"
        link={{
          href: "/mars/rovers",
          label: "See more",
        }}
      >
        Mars <p className="text-gray-400 text-sm">Photos by Rovers</p>
      </Container.Title>
      <Container.Grid>
        {firstPhotos.map((photo) => (
          <Link href={`/mars/rovers/${photo.id}`} key={photo.id}>
            <Image
              isBlurred
              isZoomed
              key={photo.id}
              src={photo.img_src}
              alt={`image ${photo.id}`}
              loading="lazy"
              width={375}
              height={250}
              className="w-full h-64 object-cover rounded-xl cursor-pointer shadow-lg"
              draggable={false}
            />
          </Link>
        ))}
      </Container.Grid>
    </Container>
  );
}
