import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from './about';  // Import with a clear name
import serviceSlice from './services'

const store = configureStore({
    reducer: {
        about: aboutReducer,
        service:  serviceSlice
    }
});

export default store;
