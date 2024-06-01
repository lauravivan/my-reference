import { IKImage } from "imagekitio-react";
import { transformStringToId } from "../util/util";

type CardType = {
  refLink: string;
  refImgPath?: string;
  refName: string;
};

export function Card({ refLink, refImgPath, refName }: CardType) {
  return (
    <article id={transformStringToId(refName)}>
      <a href={refLink}>
        <IKImage
          urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
          path={refImgPath}
          width="100px"
        />
        <div>{refName}</div>
      </a>
    </article>
  );
}
