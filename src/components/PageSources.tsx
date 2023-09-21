"use client";

import { useQuery } from "react-query";
import { usePathname } from "next/navigation";
import newsApiService from "@/libs/services/newsApiService";
import CardImageBanner from "./CardImageBanner";
import Card from "./Card";

export default function PageSources() {
  const pathname = usePathname().split("/")[1];

  const { data } = useQuery(pathname, () =>
    newsApiService.getTopHeadlines({
      sources: pathname,
      pageSize: 9,
      page: 1,
    })
  );
  const articles = data?.articles ?? [];

  return (
    <main className='grid md:grid-cols-4 grid-flow-row gap-5 pb-5'>
      {articles.slice(0, 1).map((article, index) => (
        <CardImageBanner
          className='md:row-span-2 md:col-span-2'
          image={
            article?.urlToImage ??
            `https://source.unsplash.com/random/?news&sig=${index * 10}`
          }
          title={article?.title ?? ""}
          description={article?.description ?? ""}
          href={article?.url ?? ""}
        />
      ))}

      {articles.slice(1, articles.length).map((article, index) => (
        <Card
          key={index}
          title={article.title ?? ""}
          image={
            article.urlToImage ??
            `https://source.unsplash.com/random/?news&sig=${index}`
          }
          href={article.url ?? ""}
          date={article.publishedAt ?? ""}
          publisher={article.source.name ?? ""}
        />
      ))}
    </main>
  );
}
