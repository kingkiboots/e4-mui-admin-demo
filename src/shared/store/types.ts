export type UseLoadingStore = {
  isLoading: boolean;
  isContinuousLoading: boolean;
  actions: {
    showLoading: () => void;
    hideLoading: () => void;
    showCountinuousLoading: () => void;
    hideCountinuousLoading: () => void;
  };
};
