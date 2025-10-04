// shared/ui/Image.tsx
import { forwardRef, type ImgHTMLAttributes } from "react";
import Box, { type BoxProps } from "@mui/material/Box";

export interface ImageProps extends Omit<BoxProps, "component"> {
  // 필수 img 속성
  src: string;
  alt: string;

  // 선택적 img 속성 (자주 쓰는 것만 Pick)
  width?: ImgHTMLAttributes<HTMLImageElement>["width"];
  height?: ImgHTMLAttributes<HTMLImageElement>["height"];
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  srcSet?: ImgHTMLAttributes<HTMLImageElement>["srcSet"];

  // CSS 속성
  objectFit?: React.CSSProperties["objectFit"];

  // 커스텀
  fallbackSrc?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width = "100%",
      height = "auto",
      objectFit = "cover",
      loading = "lazy",
      fallbackSrc,
      sx,
      ...props
    },
    ref
  ) => {
    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (fallbackSrc) {
        e.currentTarget.src = fallbackSrc;
      }
    };

    return (
      <Box
        ref={ref}
        component="img"
        src={src}
        alt={alt}
        loading={loading}
        onError={handleError}
        sx={{
          display: "block",
          width,
          height,
          objectFit,
          verticalAlign: "middle",
          borderStyle: "none",
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
