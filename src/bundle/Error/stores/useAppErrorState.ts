import { useSyncExternalStore, useCallback } from 'react';
import NeedSingInError from '../classes/NeedSingInError';
import createStore from '../../lib/store/createStore';

export type AppErrorStateType = {
  hasAppError?: boolean;
  status?: any;
  statusText?: any;
};

const initialState: AppErrorStateType = {
  hasAppError: false,
  status: null,
  statusText: null,
};

const store = createStore(initialState);

const useAppErrorState = (setIsUpdating?: any) => {
  const appError = useSyncExternalStore(store.subscribe, store.getState);

  const setAppErrorRes = useCallback(
    (e: any) => {
      if (setIsUpdating) {
        setIsUpdating(false);
      }

      if (e instanceof NeedSingInError) {
        return;
      }

      const newState: AppErrorStateType = {
        hasAppError: true,
        status: e.status,
        statusText: e?.message,
      };

      store.setState(newState);
    },
    [setIsUpdating]
  );

  const clearState = useCallback(() => {
    store.setState(initialState);
  }, []);

  return {
    appError,
    setAppErrorRes,
    clearState,
  };
};

export default useAppErrorState;
