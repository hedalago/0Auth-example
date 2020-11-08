import axios from 'axios';

type Headline = {
  main: string;
};

type Byline = {
  origination: null;
  original: string;
};

export interface Multimedia {
  subType: string;
  url: string;
}

export interface NewsData {
  _id: string;
  web_url: string;
  headline: Headline;
  abstract: string;
  multimedia: Multimedia[];
  lead_paragraph: string;
  pub_date: string;
  byline: Byline;
}

const API_KEY = 'M9hnOF0e6SM1BMMKqCobX4muvOHXYGu0';

export const fetchNewsData = async (
  keyword = '',
  page = 0,
): Promise<NewsData> => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?${
      keyword !== '' ? `q=${keyword}` : ``
    }&page=${page}&api-key=${API_KEY}`,
  );

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }
  return response.data.response.docs as Promise<NewsData>;
};
