import { Card } from "./index";

type SubCategoryType = {
  subCat: string;
  subCatItems: object[];
};

export function SubCategory({ subCat, subCatItems }: SubCategoryType) {
  return (
    <div id={subCat}>
      <h3>{subCat}</h3>
      {subCatItems.map((item, index) => (
        <Card
          key={index}
          refLink={item.link}
          refName={item.name}
          refImgPath={item.img}
        />
      ))}
    </div>
  );
}
