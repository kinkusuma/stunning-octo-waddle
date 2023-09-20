"use client";

import { Button, Input, Typography } from "antd";

export default function NavBar() {
  return (
    <header className='w-full h-14 px-10 flex justify-between items-center bg-white'>
      <h1 className='font-bold text-lg text-blue-600'>NEWS Portal</h1>
      <a
        href='#'
        className='h-full p-2 flex items-center font-medium text-base rounded-b-md hover:bg-blue-500 hover:text-white'
      >
        Business
      </a>
      <Input.Search
        placeholder='Search'
        className='w-56'
        onSearch={(value) => console.log(value)}
      />
    </header>
  );
}
