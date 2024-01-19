'use client'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'

interface Props {
  children: React.ReactNode
}

export function ReduxProvider({ children }: Props): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}
