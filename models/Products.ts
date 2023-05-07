interface Products {
  cartImg: string;
  id: number;
  name: string;
  image: Images;
  price: number;
  category: string;
  description: string;
  categoryImage: Images;
  features: string;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  includes: Includes[];
  new: boolean;
  others: OthersList[];
  slug: string;
  shortName: string;
}
export interface OthersList {
  image: string;
  name: string;
  slug: string;
  category: string;
  mobileImg: string;
  tabletImg: string;
}
export interface Includes {
  item: string;
  quantity: number;
}
export interface Images {
  desktop:string;
  tablet:string;
  mobile:string;
}

export default Products;
