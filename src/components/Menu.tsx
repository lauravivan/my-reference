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
    <div className="menu">
      <span>TABLE OF CONTENTS</span>
      <div>
        {store.map((cat, i) => (
          <div className="menu__category" key={i}>
            {getMenuItem(cat.category, cat.category)}
            {cat.subCategories.map((subCat, i) => (
              <div className="menu__sub-category" key={i}>
                {getMenuItem(subCat.subCategory, subCat.subCategory)}
                {subCat.references.map((ref, i) => (
                  <div className="menu__link-name" key={i}>
                    {getMenuItem(transformStringToId(ref.name), ref.name)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
