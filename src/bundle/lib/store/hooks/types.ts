export interface IItemState<T> {
  isLoading?: boolean;
  isUpdating?: boolean;
  item?: T | null;
  error?: any;
  ok?: any;
}

export interface IItemsState<T> {
  isLoading?: boolean;
  items?: T[];
  items_total_count?: number | null;
  error?: any;
  ok?: any;
}
