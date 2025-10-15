import type { YNType } from "../type";
import type { SelectOption } from "../ui/SelectUI";

export const SELECT_OPTION_YN: SelectOption[] = [
  {
    label: "Y",
    value: "Y",
  },
  {
    label: "N",
    value: "N",
  },
] as const;

export const USE_YN_Y: YNType = "Y" as const;
export const USE_YN_N: YNType = "N" as const;
