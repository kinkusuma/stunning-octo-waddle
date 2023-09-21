"use client";

import type { AnchorProps } from "antd";
import { Anchor } from "antd";
import SectionBanner from "./SectionBanner";
import SectionLayout from "./SectionLayout";

export default function PageHome() {
  const categories: AnchorProps["items"] = [
    {
      title: "Country",
      key: "country",
      href: "#global",
      children: [
        { title: "Global", key: "global", href: "#global" },
        { title: "Asia", key: "asia", href: "#asia" },
        { title: "Europe", key: "europe", href: "#europe" },
        { title: "America", key: "america", href: "#america" },
        { title: "Australia", key: "australia", href: "#australia" },
        { title: "Africa", key: "africa", href: "#africa" },
      ],
    },
    {
      title: "Category",
      key: "category",
      href: "#politics",
      children: [
        { title: "Politics", key: "politics", href: "#politics" },
        { title: "Technology", key: "technology", href: "#technology" },
        { title: "Business", key: "business", href: "#business" },
        { title: "Sports", key: "sports", href: "#sports" },
        { title: "Science", key: "science", href: "#science" },
        { title: "Health", key: "health", href: "#health" },
      ],
    },
  ];

  return (
    <main className='grid gap-5 pb-5'>
      <SectionBanner />

      <div className='grid md:grid-cols-8'>
        <div className='grid gap-2'>
          <Anchor className='mt-5 hidden md:block' items={categories} />
        </div>
        <div className='grid gap-10 md:col-span-7'>
          {categories.map((category, index) =>
            category.children?.map((child, childIndex) => {
              // prettier-ignore
              const type = (((index + childIndex) % 4) + 1).toString() as "1" | "2" | "3" | "4";
              return (
                <SectionLayout
                  key={child.key}
                  title={child.title as string}
                  id={child.key as string}
                  keyword={child.key as string}
                  type={type}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
