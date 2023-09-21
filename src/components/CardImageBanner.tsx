"use client";

import { Button } from "antd";
import CardImageContainer from "./CardImageContainer";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
};

export default function CardImageBanner({
  title,
  description,
  image,
  href,
  className,
}: Props) {
  return (
    <CardImageContainer image={image} href={href} className={className}>
      <div className='md:w-3/4 py-5 grid gap-3'>
        <p className='font-medium text-2xl text-white drop-shadow-lg'>
          {title}
        </p>
        <p className='text-sm text-white drop-shadow-lg'>{description}</p>
        <Button className='w-fit bg-white text-black'>Read More</Button>
      </div>
    </CardImageContainer>
  );
}
