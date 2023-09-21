"use client";

import { Tag } from "antd";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  image: string;
  href: string;
  date: string;
  publisher: string;
  className?: string;
};

export default function Card({
  title,
  date,
  publisher,
  image,
  href,
  className,
}: Props) {
  return (
    <a
      href={href}
      className={twMerge([
        className,
        "grid grid-rows-3 gap-3 group rounded-lg bg-slate-50 hover:bg-slate-100",
      ])}
    >
      <div
        className='min-h-[5rem] row-span-2 flex justify-start items-end bg-cover bg-center bg-no-repeat bg-slate-500 rounded-t-lg'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='w-full h-full group-hover:bg-white/10'></div>
      </div>
      <p className='px-2 font-medium group-hover:text-slate-900 group-hover:underline'>
        {title}
      </p>
      <div className='px-2 pb-2 w-full flex justify-between'>
        <Tag className='text-xs'>{publisher}</Tag>
        <p className='text-xs'>{dayjs(date).format("ddd, DD MMM ")}</p>
      </div>
    </a>
  );
}
