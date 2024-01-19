'use client'
import { useRef } from 'react';
import store from '../lib/store';
import { Provider } from 'react-redux';


const StoreProvider = ({ children }) => {
    const storeRef = useRef()
    if (!storeRef.current) {
        storeRef.current = store
    }
  return (
      <Provider store={storeRef.current}>{ children }</Provider>
  )
}

export default StoreProvider