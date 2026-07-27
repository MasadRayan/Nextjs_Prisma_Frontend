export interface Author {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Comment {
  id: string;
  content: string;
  status: 'APPROVED' | 'REJECTED' | 'PENDING';
  createdAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  tags: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
  author: Author;
  comments: Comment[];
  _count: {
    comments: number;
  };
}
