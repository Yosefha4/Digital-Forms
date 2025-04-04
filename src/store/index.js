import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../services/apiService";

const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiService.middleware),
});

export default store;
