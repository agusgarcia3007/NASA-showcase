import Image from "next/image";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

export default function Logo({ size = "medium" }: LogoProps) {
  const sizeDict: string = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10",
  }[size];

  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={500}
      height={500}
      className={sizeDict}
      priority
    />
  );
}
