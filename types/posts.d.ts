interface Post {
  id: string;
  user: string;
  title: string;
  content?: string;
  created_at: string;
  updated_at: string;
  status: string;
  likes: number;
  thumbnail?: string;
  description?: string;
}

interface PaginatedPosts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}
