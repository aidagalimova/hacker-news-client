export interface News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  date: string;
  timeAgo: string;
}

export interface FullNews extends News {
  url?: string;
}

export interface NewsSchema {
  news: News[];
  isLoading: boolean;
  selectedNewsId: number | null;
  selectedNews: FullNews | null;
  isSelectedLoading: boolean;
}
