import { Image as NextUIImage } from "@nextui-org/react";
import NextImage from "next/image";

type ImageProps = {
  isBlured?: boolean;
  isZoomed?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "onError">;

export default function Image({
  isBlured,
  isZoomed,
  radius,
  ...props
}: ImageProps) {
  return (
    <NextUIImage
      as={NextImage}
      isBlurred={isBlured}
      isZoomed={isZoomed}
      radius={radius}
      {...props}
    />
  );
}
