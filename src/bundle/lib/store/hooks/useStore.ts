import { useCallback } from 'react';
import { StoreType } from '../createStore';
import prepareError from '../prepareError';
import { IItemsState, IItemState } from './types';
import IApiServiceResponse from '../../../../api/types';

const useStore = <ItemType>(store: StoreType, initialState: any) => {
  const setUpdateItemRes = useCallback(
    (res: IApiServiceResponse<any>, values: any) => {
      let newState: IItemState<ItemType> = {
        ...initialState,
        isUpdating: false,
        item: values,
      };

      newState = prepareError(newState, res);

      if (!newState.error) {
        newState.ok = true;
        newState.item = res.json;
      }

      store.setState(newState);
    },
    [initialState, store]
  );

  const setIsUpdating = useCallback(
    (isUpdating: boolean) => {
      const oldState = store.getState();

      const newState: IItemState<ItemType> | IItemsState<ItemType> = {
        ...oldState,
        isUpdating,
      };

      store.setState(newState);
    },
    [store]
  );

  const clearState = useCallback(() => {
    store.setState(initialState);
  }, [initialState, store]);

  const clearError = useCallback(() => {
    const oldState = store.getState();

    const newState: IItemState<ItemType> | IItemsState<ItemType> = {
      ...oldState,
      error: null,
    };

    store.setState(newState);
  }, [store]);

  const setOk = useCallback(
    (flag: boolean | null) => {
      const oldState = store.getState();

      const newState: IItemState<ItemType> | IItemsState<ItemType> = {
        ...oldState,
        ok: flag,
      };

      store.setState(newState);
    },
    [store]
  );

  return {
    setUpdateItemRes,
    setIsUpdating,
    clearState,
    clearError,
    setOk,
  };
};

export default useStore;

