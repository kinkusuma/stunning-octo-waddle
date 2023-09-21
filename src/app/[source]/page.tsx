import PageSources from "@/components/PageSources";
import newsSource from "@/libs/constant/newsSource";
import type { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths = (async () => {
  return {
    paths: newsSource
      .filter(({ key }) => key !== "")
      .map(({ key }) => ({ params: { source: key } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  return { props: {} };
}) satisfies GetStaticProps<{}>;

export default function SourceNews({}) {
  return <PageSources />;
}
