import React, { useContext, useEffect } from 'react';
import ListItem from './ListItem'
import { Container, Row, Col } from 'components/Layout'
import { ProductListContext } from 'context'
import { FiltersContext } from 'context'
import { SortContext } from 'context'
import { SearchContext } from 'context'

import { SORT_MAP } from '../../constants'

function List({ resultData, loading }) {
  const [ productList, setProductList ] = useContext(ProductListContext)
  const [ searchParam ] = useContext(SearchContext)

  const [ range ] = useContext(FiltersContext)
  const [ sort ] = useContext(SortContext)

  useEffect(() => {
    let sortedFilteredArray = [ ...resultData ]
    if (searchParam.param.length) {
      sortedFilteredArray = sortedFilteredArray.filter((item) => item.name.toLowerCase().includes(searchParam.param.toLowerCase()) || !searchParam.param)
    }

    if (range.min > 100 || range.max < 200000) {
      sortedFilteredArray = sortedFilteredArray.filter((item) => item.price.actual <= range.max && item.price.actual >= range.min)
    }
    if (sort.type === SORT_MAP.HIGH_TO_LOW) {
      sortedFilteredArray.sort((a, b) => { return a.price.actual < b.price.actual ? 1 : -1 })
    }
    if (sort.type === SORT_MAP.LOW_TO_HIGH) {
      sortedFilteredArray.sort((a, b) => { return a.price.actual > b.price.actual ? 1 : -1 })
    }

    if (sort.type === SORT_MAP.DISCOUNT) {
      sortedFilteredArray.sort((a, b) => { return a.discount > b.discount ? 1 : -1 })
    }

    setProductList(sortedFilteredArray)
  }, [ sort, range, searchParam, resultData ])

  return (
    <Container>
      <Row>
        {loading ? <p className="fs-5 c-neutral-400 fw-500 my-5">Loading...</p> :
          productList.map((item) => (
            <Col span={2} md={6} sm={6} key={item.id}>
              <ListItem product={item} />
            </Col>
          ))
        }

      </Row>

    </Container>
  )
}

export default List