export type NewsApiArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
};

// prettier-ignore
export type NewsApiLanguage = "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "se" | "ud" | "zh";

// prettier-ignore
export type NewsApiCountry = "ae" | "ar" | "at" | "au" | "be" | "bg" | "br" | "ca" | "ch" | "cn" | "co" | "cu" | "cz" | "de" | "eg" | "fr" | "gb" | "gr" | "hk" | "hu" | "id" | "ie" | "il" | "in" | "it" | "jp" | "kr" | "lt" | "lv" | "ma" | "mx" | "my" | "ng" | "nl" | "no" | "nz" | "ph" | "pl" | "pt" | "ro" | "rs" | "ru" | "sa" | "se" | "sg" | "si" | "sk" | "th" | "tr" | "tw" | "ua" | "us" | "ve" | "za";

// prettier-ignore
export type NewsApiCategory = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";

// prettier-ignore
export type NewsApiSortBy = "relevancy" | "popularity" | "publishedAt";

export type NewsApiEverythingParams = {
  q?: string;
  searchIn?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: NewsApiLanguage;
  sortBy?: NewsApiSortBy;
  pageSize?: number;
  page?: number;
} & (
  | { q: string }
  | { searchIn: string }
  | { sources: string }
  | { domains: string }
);

export type NewsApiTopHeadlinesParams = {
  q?: string;
  sources?: string;
  category?: NewsApiCategory;
  country?: NewsApiCountry;
  pageSize?: number;
  page?: number;
} & (
  | { q: string }
  | { sources: string }
  | { category: NewsApiCategory }
  | { country: NewsApiCountry }
);
