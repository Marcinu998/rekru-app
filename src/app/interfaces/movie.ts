export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  loading?: boolean;
  title?: string;
  publishedAt?: Date;
  likeCount?: string;
  viewCount?: string;
  src?: string;
}
