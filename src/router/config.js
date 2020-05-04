import ResultsPage from 'pages/results'
import Cart from 'pages/cart'

export default [
  {
    path: '/',
    component: ResultsPage,
    exact: true
  },
  {
    path: '/cart',
    component: Cart,
    exact: true
  },
]