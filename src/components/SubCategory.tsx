import { Card } from "./index";

type SubCategoryType = {
  subCat: string;
  subCatItems: object[];
};

export function SubCategory({ subCat, subCatItems }: SubCategoryType) {
  return (
    <div className="sub-cat" id={subCat}>
      <h3 className="sub-cat__name">{subCat}</h3>
      <div className="sub-cat__cards">
        {subCatItems.map((item, index) => (
          <Card
            key={index}
            refLink={item.link}
            refName={item.name}
            refImgPath={item.img}
          />
        ))}
      </div>
    </div>
  );
}
