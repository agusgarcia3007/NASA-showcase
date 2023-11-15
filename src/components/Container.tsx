import { Link } from "@nextui-org/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

Container.Title = function ContainerTitle({
  children,
  uppercase,
  size = "medium",
  link,
}: {
  children: React.ReactNode;
  uppercase?: boolean;
  size?: "small" | "medium" | "large";
  link?: {
    href: string;
    label: string;
  } | null;
}) {
  const sizeDict = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  }[size];
  return (
    <div className="flex gap-x-3 my-2 sm:my-4">
      <h2
        className={clsx(
          "text-3xl font-bold",
          sizeDict,
          uppercase && "uppercase"
        )}
      >
        {children}
      </h2>
      {link && (
        <Link
          href={link.href}
          className="text-gray-400 self-end text-sm"
          underline="hover"
        >
          {link.label} <CaretRight />
        </Link>
      )}
    </div>
  );
};

Container.Grid = function ContainerGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
      {children}
    </div>
  );
};

export default function Container({ children }: ContainerProps) {
  return <div className="flex flex-col p-4 gap-y-3">{children}</div>;
}
