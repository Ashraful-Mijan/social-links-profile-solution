"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ children, path }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === `/${path}` ? "link-active" : ""
      } w-full h-full flex justify-center font-semibold rounded-md py-2 bg-grey link-hover`}
      href={`/${path}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
