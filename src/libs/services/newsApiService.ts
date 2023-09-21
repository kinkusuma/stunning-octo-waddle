import { newsApiFetch } from "@/config/newsApiFetch";
import {
  NewsApiEverythingParams,
  NewsApiResponse,
  NewsApiTopHeadlinesParams,
} from "@/types/newsApiTypes";

const getEverything = async (params: NewsApiEverythingParams) => {
  const response = await newsApiFetch.get<NewsApiResponse>("/everything", {
    params: params,
  });
  return response.data;
};

const getTopHeadlines = async (params: NewsApiTopHeadlinesParams) => {
  const response = await newsApiFetch.get<NewsApiResponse>("/top-headlines", {
    params: params,
  });
  return response.data;
};

const newsApiService = { getEverything, getTopHeadlines };
export default newsApiService;
