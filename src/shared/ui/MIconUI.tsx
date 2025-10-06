// eslint-disable-next-line no-restricted-imports
import * as MUIcon from "@mui/icons-material";
// eslint-disable-next-line no-restricted-imports
import type { IconTypeMap } from "@mui/material";
import { memo } from "react";

type IconProps = IconTypeMap["props"];

interface MIconProps extends IconProps {
  name: string | undefined;
}

export const MIcon = memo((props: MIconProps) => {
  const { name } = props;
  const Icon = MUIcon[name as keyof typeof MUIcon];
  if (Icon == null) {
    throw `There is no "${name}" Icon`;
  }
  return <Icon {...props} />;
});

MIcon.displayName = "MIcon";
