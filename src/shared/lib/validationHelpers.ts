import { isNullOrEmpty } from "./commonHelpers";

export const checkIfEveryDataIsNullOrEmpty = <T extends {}>(data: T) => {
  if (Object.values(data).every((value) => isNullOrEmpty(value))) {
    return true;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkIfDataIsNullOrEmpty = (...data: any[]) => {
  if (data.every((value) => isNullOrEmpty(value))) {
    return true;
  }
};
