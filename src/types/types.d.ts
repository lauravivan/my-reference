declare type CategoryType = {
  category: string;
  subCategories: Array<SubCategoryType>;
};

declare type SubCategoryType = {
  subCategory: string;
  references: Array<ReferenceType>;
};

declare type ReferenceType = {
  name: string;
  link?: string;
  img?: string;
};
