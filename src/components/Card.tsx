import { IKImage } from "imagekitio-react";
import { transformStringToId } from "../util/util";
import NoImg from "./icons/NoImg";

type CardType = {
  refLink: string;
  refImgPath?: string;
  refName: string;
};

export function Card({ refLink, refImgPath, refName }: CardType) {
  return (
    <article className="card" id={transformStringToId(refName)}>
      <a href={refLink} target="_blank">
        {refImgPath && (
          <IKImage
            urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
            path={refImgPath}
            className="card__img"
          />
        )}
        {!refImgPath && (
          <div className="card__img card__img--no-img">
            <NoImg />
          </div>
        )}
        <div className="card__divisor"></div>
        <div className="card__link-name">{refName}</div>
      </a>
    </article>
  );
}
