"use client";

import newsApiService from "@/libs/services/newsApiService";
import { useQuery } from "react-query";
import CardImage from "./CardImage";
import Card from "./Card";

type Props = {
  title: string;
  keyword: string;
  type: "1" | "2" | "3" | "4";
  id?: string;
  className?: string;
};

export default function SectionLayout({
  title,
  type,
  keyword,
  id,
  className,
}: Props) {
  const { data } = useQuery(keyword, () =>
    newsApiService.getEverything({
      q: keyword,
      searchIn: "title",
      pageSize: 6,
      page: 1,
    })
  );
  const articles = data?.articles ?? [];

  return (
    <section className={className} id={id}>
      <p className='py-5 font-medium text-xl'>{title}</p>
      {type === "1" ? (
        <div className='min-h-[35rem] grid gap-3 md:grid-cols-3 md:grid-rows-2'>
          {articles.slice(0, 1).map((article, index) => (
            <CardImage
              className='md:col-span-2'
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?news&sig=${index}`
              }
              title={article.title ?? ""}
              description={article.description ?? ""}
              href={article.url ?? ""}
            />
          ))}

          {articles.slice(1, 5).map((article, index) => (
            <Card
              key={index}
              title={article.title ?? ""}
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?${keyword}&sig=${index}`
              }
              href={article.url ?? ""}
              date={article.publishedAt ?? ""}
              publisher={article.source.name ?? ""}
            />
          ))}
        </div>
      ) : null}

      {type === "2" ? (
        <div className='min-h-[35rem] grid gap-3 md:grid-cols-6 md:grid-rows-2'>
          {articles.slice(0, 2).map((article, index) => (
            <CardImage
              className='md:col-span-3'
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?${keyword}&sig=${
                  index * 10
                }`
              }
              title={article.title ?? ""}
              description={article.description ?? ""}
              href={article.url ?? ""}
            />
          ))}
          {articles.slice(2, 5).map((article, index) => (
            <Card
              className='md:col-span-2'
              key={index}
              title={article.title ?? ""}
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?entertainment&sig=${keyword}`
              }
              href={article.url ?? ""}
              date={article.publishedAt ?? ""}
              publisher={article.source.name ?? ""}
            />
          ))}
        </div>
      ) : null}

      {type === "3" ? (
        <div className='min-h-[35rem] grid gap-3 md:grid-cols-3 md:grid-rows-2'>
          {articles.slice(0, 1).map((article, index) => (
            <CardImage
              className='md:row-span-2'
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?news&sig=${index}`
              }
              title={article.title ?? ""}
              description={article.description ?? ""}
              href={article.url ?? ""}
            />
          ))}

          {articles.slice(1, 5).map((article, index) => (
            <Card
              key={index}
              title={article.title ?? ""}
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?${keyword}&sig=${index}`
              }
              href={article.url ?? ""}
              date={article.publishedAt ?? ""}
              publisher={article.source.name ?? ""}
            />
          ))}
        </div>
      ) : null}

      {type === "4" ? (
        <div className='min-h-[35rem] grid gap-3 md:grid-cols-3 md:grid-rows-2'>
          {articles.slice(0, 6).map((article, index) => (
            <Card
              key={index}
              title={article.title ?? ""}
              image={
                article.urlToImage ??
                `https://source.unsplash.com/random/?${keyword}&sig=${index}`
              }
              href={article.url ?? ""}
              date={article.publishedAt ?? ""}
              publisher={article.source.name ?? ""}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
