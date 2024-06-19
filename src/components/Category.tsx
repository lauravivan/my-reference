import { SubCategory } from "./index";

type CategoryComponentType = {
  category: CategoryType;
};

export function Category({ category }: CategoryComponentType) {
  return (
    <section className="category" id={category.category}>
      <h2 className="category__name">{category.category}</h2>
      <div className="category__sub-cat">
        {category.subCategories.map((subCategory, index) => {
          console.log(subCategory);
          return <SubCategory key={index} subCategory={subCategory} />;
        })}
      </div>
    </section>
  );
}
