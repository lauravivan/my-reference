import { Card } from "./index";

type SubCategoryComponentType = {
  subCategory: SubCategoryType;
};

export function SubCategory({ subCategory }: SubCategoryComponentType) {
  return (
    <div className="sub-cat" id={subCategory.subCategory}>
      <h3 className="sub-cat__name">{subCategory.subCategory}</h3>
      <div className="sub-cat__cards">
        {subCategory.references.map((reference, index) => (
          <Card key={index} reference={reference} />
        ))}
      </div>
    </div>
  );
}
