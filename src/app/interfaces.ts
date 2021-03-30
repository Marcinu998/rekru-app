export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  loading?: boolean;
  title?: string;
  publishedAt?: any;
  likeCount?: string;
  viewCount?: string;
  src?: string;
}
