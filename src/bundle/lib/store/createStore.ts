export type StoreType = {
  state: any;
  setState: (newState: any) => void;
  getState: () => any;
  listeners: Set<any>;
  subscribe: (callback: any) => any;
};

const createStore = (initialState: any) => {
  const store: StoreType = {
    state: initialState,
    setState: (newState: any) => {
      store.state = newState;
      store.listeners.forEach((listener: any) => listener());
    },
    getState: () => {
      return store.state;
    },
    listeners: new Set(),
    subscribe: (callback: any) => {
      store.listeners.add(callback);

      return () => store.listeners.delete(callback);
    },
  };

  return store;
};

export default createStore;
