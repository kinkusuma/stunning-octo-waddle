"use client";

import newsApiService from "@/libs/services/newsApiService";
import { useQuery } from "react-query";
import CardImageBanner from "./CardImageBanner";
import CardImageLong from "./CardImageLong";

export default function SectionBanner() {
  const { data } = useQuery("headline", () =>
    newsApiService.getEverything({
      q: "global",
      pageSize: 4,
      page: 1,
    })
  );
  const articles = data?.articles ?? [];

  return (
    <section>
      <div className='md:h-96 grid gap-3 md:grid-cols-5 md:grid-rows-3'>
        {articles.slice(0, 1).map((article, index) => (
          <CardImageBanner
            key={index}
            className='md:col-span-3 md:row-span-3'
            image={
              article.urlToImage ??
              `https://source.unsplash.com/random/?news&sig=${index}`
            }
            title={article.title ?? ""}
            description={article.description ?? ""}
            href={article.url ?? ""}
          />
        ))}

        {articles.slice(1, 4).map((article, index) => (
          <CardImageLong
            key={index}
            className='md:col-span-2'
            image={
              article.urlToImage ??
              `https://source.unsplash.com/random/?news&sig=${index}`
            }
            title={article.title ?? ""}
            date={article.publishedAt ?? ""}
            publisher={article.source.name ?? ""}
            href={article.url ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
