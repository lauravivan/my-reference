import { SubCategory } from "./index";

type CategoryType = {
  cat: string;
  catItems: object[];
};

export function Category({ cat, catItems }: CategoryType) {
  return (
    <section className="category" id={cat}>
      <h2 className="category__name">{cat}</h2>
      <div className="category__sub-cat">
        {catItems.map((subCategory, index) => (
          <SubCategory
            key={index}
            subCat={subCategory.subCategory}
            subCatItems={subCategory.references}
          />
        ))}
      </div>
    </section>
  );
}
