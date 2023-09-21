"use client";

import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  image: string;
  href: string;
  children?: ReactNode;
  className?: string;
};

export default function CardImageContainer({
  image,
  href,
  children,
  className,
}: Props) {
  return (
    <a
      href={href}
      className={twMerge([
        className,
        "min-h-[15rem] md:min-h-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg bg-slate-500",
      ])}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${image})`,
      }}
    >
      <div className='w-full h-full p-3 flex justify-start items-end hover:bg-white/10'>
        {children}
      </div>
    </a>
  );
}
