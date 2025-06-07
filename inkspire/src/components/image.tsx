import React from "react";
import { IKImage } from "imagekitio-react";

interface IProps {
  src: any;
  className?: any;
  w?: number;
  h?: number;
  alt?: string;
}

const Image: React.FC<IProps> = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
