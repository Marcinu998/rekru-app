export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  link: string;
  loading?: boolean;
  title: string;
  publishedAt: any;
  likeCount: string;
  viewCount: string;
  src: any;
}
