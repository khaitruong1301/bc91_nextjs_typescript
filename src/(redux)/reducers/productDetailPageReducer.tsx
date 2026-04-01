import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductDetailPageState {
    rotate: string;
}

const initialState: ProductDetailPageState = {
    rotate:'rotate(0deg)'
}

const productDetailPageReducer = createSlice({
  name: 'productDetailPageReducer',
  initialState,
  reducers: {
    rotateImgActionPayload: (state:ProductDetailPageState, action:PayloadAction<string>) => {
        state.rotate = action.payload;
    }
  }
})

export const { rotateImgActionPayload } = productDetailPageReducer.actions

export default productDetailPageReducer.reducer