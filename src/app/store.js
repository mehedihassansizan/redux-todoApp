import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../Features/Todo/todoSlice'

export const store = configureStore({
  reducer: todoSlice,
})