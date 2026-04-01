"use client"
import {  RootStateRedux } from '../../../../(redux)/store';
import { ProductVM } from '@/(ViewModel)/ProductVM'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
type Props = {
    prodDetail : ProductVM
}
const ImgProduct = (props: Props) => {

  const {rotate} = useSelector((state:RootStateRedux) => state.productDetailPageReducer)


  return (
        <img src={props.prodDetail.image} alt={props.prodDetail.name} style={{width:"100%", height:"400px", objectFit:"cover", transform: rotate}} />
  )
}

export default ImgProduct