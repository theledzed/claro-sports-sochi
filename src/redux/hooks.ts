import type { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
