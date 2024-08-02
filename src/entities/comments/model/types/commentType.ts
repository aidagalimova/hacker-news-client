export interface Comment {
  id: number;
  user: string;
  content: string;
  comments: Comment[];
  commentsCount: number;
}

export interface Comments {
  commentsCount: number | null;
  comments: Comment[];
}

export interface CommentsSchema {
  data: Comments | null;
  isLoading: boolean;
}
