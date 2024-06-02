import store from "../store/store";
import { transformStringToId } from "../util/util";

function getMenuItem(id: string, name: string) {
  return (
    <div>
      <a href={`#${id}`}>{name}</a>
    </div>
  );
}

export function Menu() {
  return (
    <div>
      {store.map((cat, i) => (
        <div key={i}>
          {getMenuItem(cat.category, cat.category)}
          {cat.subCategories.map((subCat, i) => (
            <div key={i}>
              {getMenuItem(subCat.subCategory, subCat.subCategory)}
              {subCat.references.map((ref, i) => (
                <div key={i}>
                  {getMenuItem(transformStringToId(ref.name), ref.name)}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
