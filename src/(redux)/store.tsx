import {configureStore} from '@reduxjs/toolkit'
import productDetailPageReducer from './reducers/productDetailPageReducer'


export const store = configureStore({
    reducer: {
        productDetailPageReducer
    }
})

export type RootStateRedux = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch