import { useSyncExternalStore } from 'react';
import { SingleErrorType } from '../../../api/errorTypes/SingleErrorType';
import createStore from '../../lib/store/createStore';
import useStore from '../../lib/store/hooks/useStore';

type ContactUsState = {
  isUpdating: boolean;
  item: any;
  ok?: boolean;
  error?: SingleErrorType | null;
};

const initialState: ContactUsState = {
  isUpdating: false,
  item: null,
};

const store = createStore(initialState);

const useContactUsState = () => {
  const contactUs = useSyncExternalStore(store.subscribe, store.getState);

  const { setIsUpdating, setUpdateItemRes, clearState } = useStore(
    store,
    initialState
  );

  return {
    contactUs,
    setUpdateItemRes,
    setIsUpdating,
    clearState,
  };
};

export default useContactUsState;
