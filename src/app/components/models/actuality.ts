export interface Actuality {
  id: number;
  image: string;
  name: string;
  address: string;
  title: string;
  shortdesc: string;
  tags: number[];
  raised: string;
  goal: number;
  postdate: string;
  htmldesc: string;
  reviews: Review[];
  gallery: string[];
}

export interface Review {
  user: number[];
  commentdate: string;
  comment: string;
  replies?: Review[];
}
