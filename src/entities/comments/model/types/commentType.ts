export interface Comment {
  id: number;
  user: string | null;
  content: string;
  comments: Comment[];
  comments_count: number;
}

export interface Comments {
  commentsCount: number | null;
  comments: Comment[];
}

export interface CommentsSchema {
  data: Comments | null;
  isLoading: boolean;
}
