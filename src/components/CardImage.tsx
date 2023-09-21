"use client";

import CardImageContainer from "./CardImageContainer";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
};

export default function CardImage({
  title,
  description,
  image,
  href,
  className,
}: Props) {
  return (
    <CardImageContainer image={image} href={href} className={className}>
      <div className='grid gap-3'>
        <p className='font-medium text-lg text-white group-hover:text-blue-300 drop-shadow-lg'>
          {title}
        </p>
        <p className='text-sm text-white group-hover:text-blue-300 drop-shadow-lg'>
          {description}
        </p>
      </div>
    </CardImageContainer>
  );
}
