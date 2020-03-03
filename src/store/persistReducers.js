import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
