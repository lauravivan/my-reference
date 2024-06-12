import { Category } from "./index";
import store from "../store/store";

export function Main() {
  return (
    <main className="main">
      {store.map((category, index) => (
        <Category
          cat={category.category}
          catItems={category.subCategories}
          key={index}
        />
      ))}
    </main>
  );
}
