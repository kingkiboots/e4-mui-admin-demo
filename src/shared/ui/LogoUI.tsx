import { memo } from "react";
import logoImg from "../asset/img/logo.png";
import { Image } from "./ImgUI";

interface LogoProps
  extends Omit<
    React.ComponentProps<typeof Image>,
    "src" | "alt" | "aria-roledescription"
  > {}

export const Logo = memo<LogoProps>((props) => {
  return (
    <Image
      src={logoImg}
      alt="마이데이터"
      aria-roledescription="logo"
      {...props}
    />
  );
});

Logo.displayName = "Logo";
