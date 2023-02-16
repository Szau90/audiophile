interface Products {
  cartImg: string;
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
  categoryImage: string;
  features: string;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  includes: {
    0: {
      item: string;
      quantity: number;
    };
    1: {
      item: string;
      quantity: number;
    };
    2: {
      item: string;
      quantity: number;
    };
    3: {
      item: string;
      quantity: number;
    };
    4: {
      item: string;
      quantity: number;
    };
  };
  new: boolean;
  others: {
    0: {
      image: string;
      name: string;
      slug: string;
      category: string;
      mobileImg: string;
      tabletImg: string;
    };
    1: {
      image: string;
      name: string;
      slug: string;
      category: string;
      mobileImg: string;
      tabletImg: string;
    };
    2: {
      image: string;
      name: string;
      slug: string;
      category: string;
      mobileImg: string;
      tabletImg: string;
    };
  };
  slug: string;
  shortName: string;
 
}



export default Products;
