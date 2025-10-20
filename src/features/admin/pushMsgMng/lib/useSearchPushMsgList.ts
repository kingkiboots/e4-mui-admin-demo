import type { PushMsgListSearchParams } from "@/entities/admin/pushMsgMng/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { defaultPushMsgListSearchParams } from "../model/getPushMsgListHandler";
import { useCallback } from "react";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";

export const useSearchPushMsgList = ({
  setPushMsgListSearchParams,
}: {
  setPushMsgListSearchParams: Dispatch<SetStateAction<PushMsgListSearchParams>>;
}) => {
  const {
    control,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm<PushMsgListSearchParams>({
    defaultValues: defaultPushMsgListSearchParams,
  });

  const handleSearchClick = useCallback(() => {
    const handleValid: SubmitHandler<PushMsgListSearchParams> = (data) => {
      setPushMsgListSearchParams(data);
    };
    handleSubmit(handleValid)();
  }, [handleSubmit, setPushMsgListSearchParams]);

  return { control, reset, handleSearchClick };
};
