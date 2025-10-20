import type { EventMngListSearchData } from "@/entities/admin/eventMng/types";
import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { defaultEventListSearchParams } from "../model/getEventListHandler";

export const useSearchEventList = ({
  setEventListSearchParams,
}: {
  setEventListSearchParams: Dispatch<SetStateAction<EventMngListSearchData>>;
}) => {
  const {
    control,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm<EventMngListSearchData>({
    defaultValues: defaultEventListSearchParams,
  });

  const handleSearchClick = useCallback(() => {
    const handleValid: SubmitHandler<EventMngListSearchData> = (data) => {
      setEventListSearchParams(data);
    };
    handleSubmit(handleValid)();
  }, [handleSubmit, setEventListSearchParams]);

  return { control, reset, handleSearchClick };
};
