import { StaticImageData } from "next/image";

export type Product = {
  id: number,
  price: number,
  quantity: number,
  firstprice: number,
  lastprice: number,
  title: string,
  category: string,
  description: string,
  //photo: string,
};

export type Customer = {
  id: number,
  title: string,
  subtitle: string,
  text: string,
  //photo: string,
};

export type Feature = {
  id: number,
  icon: StaticImageData,
  title: string,
  text: string,
  image: string,
};

export type Question = {
  id: number,
  title: string,
  text: string,
};

export type FAQImage = {
  id: number,
  title: string,
  image: string,
};

export type Brand = {
  id: number,
  title: string,
  image: string,
};

export type Blog = {
  id: number,
  tittle: string,
  date: string,
  author: string,
  intro: string,
  img: string,
  lastdate: string,
  blogurl: string,
  status: boolean,
};

export type State = {
  idestado: number,
  nombreestado: string,
};

export type City = {
  idmunicipio: number,
  nombremunicipio: string,
  codigomunicipio: string,
}

export type BlogList = [
  {
    file: string,
    id: number,
    idblog: number,
    idtype: number,
    link: string,
    order: number,
    status: boolean,
    text: string,
  }
]

export type BlogData = {
  blog: Blog,
  list: BlogList,
}
