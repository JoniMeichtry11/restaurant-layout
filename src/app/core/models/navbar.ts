export interface navbarDataListInterface {
  logo: {
    src: string;
    alt: string;
    show: boolean;
  };
  sections: string[];
  tools: {
    cart: boolean;
    user: boolean;
  }
}
