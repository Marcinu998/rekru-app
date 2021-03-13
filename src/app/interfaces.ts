export interface Movie {
  type: 'youtube' | 'vimeo';
  id: string;
  link: string;
  loading?: boolean;
  statistics: string;
  createdAt: string;
}
