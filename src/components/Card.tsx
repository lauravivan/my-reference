import { IKImage } from "imagekitio-react";
import { transformStringToId } from "../util/util";
import NoImg from "./icons/NoImg";

type CardType = {
  reference: ReferenceType;
};

export function Card({ reference }: CardType) {
  return (
    <article className="card" id={transformStringToId(reference.name)}>
      <a href={reference.link} target="_blank">
        {reference.img && (
          <IKImage
            urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
            path={reference.img}
            className="card__img"
          />
        )}
        {!reference.img && (
          <div className="card__img card__img--no-img">
            <NoImg />
          </div>
        )}
        <div className="card__divisor"></div>
        <div className="card__link-name">{reference.name}</div>
      </a>
    </article>
  );
}
