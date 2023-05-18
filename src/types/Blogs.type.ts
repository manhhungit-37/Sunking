export interface IBlog {
  name: string;
  image: string;
  desc: string;
}

export interface IBlogs extends Array<IBlog>{};