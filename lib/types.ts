export type IPostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface Author {
  id: string;
  name: string;
  email: string;
  activeStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  status: string;
  postId: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: IPostStatus;
  tags: string[];
  views: number;
  isPremium: boolean;
  authorId: string;
  author?: Author;
  comments?: Comment[];
  _count?: {
    comments: number;
  };
  createdAt: string;
  updatedAt: string;
}
