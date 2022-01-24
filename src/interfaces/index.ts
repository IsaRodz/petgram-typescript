export interface DataResponse {
  data: any[];
  total: number;
  page: number;
  limit: number;
}

export interface User {
  id: string;
  title: string; // ("mr", "ms", "mrs", "miss", "dr", "")
  firstName: string;
  lastName: string;
  gender: string; // ("male", "female", "other", "")
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
}

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: string;
  owner: User;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface Comment {
  id: string;
  message: string;
  owner: User; // (User Id)
  post: string; // (Post Id)
  publishDate: string; //  ISO Date
}
