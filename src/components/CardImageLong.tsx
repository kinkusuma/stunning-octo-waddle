"use client";

import { Tag } from "antd";
import CardImageContainer from "./CardImageContainer";
import dayjs from "dayjs";

type Props = {
  title: string;
  image: string;
  href: string;
  date: string;
  publisher: string;
  className?: string;
};

export default function CardImageLong({
  title,
  date,
  publisher,
  image,
  href,
  className,
}: Props) {
  return (
    <CardImageContainer image={image} href={href} className={className}>
      <div className='w-full h-full flex flex-col gap-3 justify-between'>
        <div className='flex justify-between'>
          <Tag className='text-xs text-white drop-shadow-lg'>{publisher}</Tag>
          <p className='text-xs text-white  drop-shadow-lg'>
            {dayjs(date).format("ddd, DD MMM ")}
          </p>
        </div>
        <p className='text-sm text-white group-hover:text-blue-300 font-medium drop-shadow-lg'>
          {title}
        </p>
      </div>
    </CardImageContainer>
  );
}
