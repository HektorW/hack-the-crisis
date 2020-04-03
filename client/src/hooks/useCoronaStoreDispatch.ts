import { useDispatch } from 'react-redux'

import { CoronaStoreDispatch } from '../store/store.types'

export default function useCoronaStoreDispatch() {
  return useDispatch<CoronaStoreDispatch>()
}
