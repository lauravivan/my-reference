import { SubCategory } from "./index";

type CategoryType = {
  cat: string;
  catItems: object[];
};

export function Category({ cat, catItems }: CategoryType) {
  return (
    <section id={cat}>
      <h2>{cat}</h2>
      {catItems.map((subCategory, index) => (
        <SubCategory
          key={index}
          subCat={subCategory.subCategory}
          subCatItems={subCategory.references}
        />
      ))}
    </section>
  );
}
