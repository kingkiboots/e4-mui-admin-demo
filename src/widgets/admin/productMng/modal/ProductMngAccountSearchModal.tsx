import { Modal } from "@/shared/ui/ModalUI";
import type { SearchModalProps } from "@/shared/ui/SearchInputUI";
import { type ComponentType } from "react";

export const ProductMngAccountSearchModal: ComponentType<SearchModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>;
};
