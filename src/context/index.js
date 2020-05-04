import { createContext } from 'react'

export const ProductListContext = createContext([[], () => { }])
export const SearchContext = createContext([{}, () => { }])
export const FiltersContext = createContext([{}, () => { }])
export const SortContext = createContext([{}, () => { }])
export const CartContext = createContext([[], () => { }])
