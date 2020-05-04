import React, { useState } from 'react';
import CsrRouter from './router'
import resultData from 'pages/results/resultData'
import { ProductListContext, FiltersContext, SortContext, CartContext, SearchContext } from 'context'

function App() {
  const productListHook = useState(resultData.items)
  const searchHook = useState({ param: '' })
  const filtersHook = useState({ min: 100, max: 200000 })
  const sortHook = useState({})
  const cartHook = useState(JSON.parse(localStorage.getItem('cartProducts')) || [])

  return (
    <ProductListContext.Provider value={productListHook}>
      <SearchContext.Provider value={searchHook}>
        <SortContext.Provider value={sortHook}>
          <FiltersContext.Provider value={filtersHook}>
            <CartContext.Provider value={cartHook}>
              <CsrRouter />
            </CartContext.Provider>
          </FiltersContext.Provider>
        </SortContext.Provider>
      </SearchContext.Provider>
    </ProductListContext.Provider>
  )

};

export default App
