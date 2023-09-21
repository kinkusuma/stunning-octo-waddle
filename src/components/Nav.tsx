"use client";

import newsSource from "@/libs/constant/newsSource";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

const sources: MenuProps["items"] = newsSource;

export default function Nav() {
  const pathname = usePathname().split("/")[1];
  const router = useRouter();
  return (
    <header className='pb-7'>
      <div className='flex pt-5 pb-2 justify-center items-center'>
        <h1 className='text-3xl font-black text-blue-600'>News Portal</h1>
      </div>
      <Menu
        selectedKeys={[pathname]}
        className='justify-center'
        items={sources}
        mode='horizontal'
        onClick={({ key }) => {
          router.push(`/${key}`);
        }}
      />
    </header>
  );
}
