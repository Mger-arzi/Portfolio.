import iconsSprite from "../../accers/image/sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  href?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      href={props.href}
      fill="#584dcfdd"
      width={props.width || "90px"}
      height={props.height || "90px"}
      viewBox={`${props.viewBox}` || `0 0 ${props.width} ${props.height}}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
