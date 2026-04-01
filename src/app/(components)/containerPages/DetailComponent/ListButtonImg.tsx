"use client"

import { rotateImgActionPayload } from '@/(redux)/reducers/productDetailPageReducer'
import { ProductVM } from '@/(ViewModel)/ProductVM'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
type Props = {
  prodDetail: ProductVM
}

const ListButtonImg = (props: Props) => {
  const {prodDetail} = props;
  const dispatch = useDispatch();
  return (
    <>
      {prodDetail.detaildetailedImages?.map((rotate, index) => {

   
        return <div onClick={async ()=>{
          const action = rotateImgActionPayload(rotate);

          dispatch(action);

        }} key={index} className="col mt-2 border rounded p-1 mx-1" style={{ borderColor: '#ddd', cursor: 'pointer' }}>
          <img
            src={prodDetail.image}
            alt={`${prodDetail.name} detail ${index + 1}`}
            className="img-fluid rounded"
            style={{ transform: rotate }}
          
          />
        </div>
      })}


    </>

  )
}

export default ListButtonImg