import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice';
import chatSlice from './chatSlice';

// export default configureStore({
//   reducer: {},
// })

const store = configureStore({
    reducer:{
        app:appSlice,
        chat:chatSlice
    },
});

export default store;