'use client'
import { store } from '@/(redux)/store'
import React from 'react'
import { Provider } from 'react-redux'

type Props = {
    children?: React.ReactNode

}

const LoadRedux = (props: Props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default LoadRedux