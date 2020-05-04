import React, { useEffect, useState, useContext } from 'react';

import Header from 'components/Header'
import Footer from 'components/Footer'
import Filter from 'components/Filter'
import List from 'components/List'
import SortBar from 'components/SortBar'
import { ProductListContext } from 'context'
import { apiGetHelper } from 'helper/apiHelper'

import resultData from './resultData'

import { Row, Col, Container, Box } from '../../components/Layout'


function Results() {
  const [ loading, setLoading ] = useState(true)
  const [ , setProductList ] = useContext(ProductListContext)
  const [savedResult, setSavedResult] = useState([])
  const _fetchResultData = async () => {
    try {
      const response = await apiGetHelper('https://test-cart-server.herokuapp.com/cart')
      if (response.items.length) {
        setLoading(false)
        setProductList(response.items)
        setSavedResult(response.items)
      } else {
        setProductList(resultData.items)
        setSavedResult(resultData.items)
      }
    }
    catch (error) {
      console.log(error)
      setProductList(resultData.items)
    }
  }

  useEffect(() => {
    _fetchResultData()
  }, [])
  return (
    <>
      <Header />
      <Box style={{ minHeight: 'calc(100vh - 116px)' }}>
        <Box className="d-none flex--sm flex-middle flex--md bb bc-neutral-300 bw-1">
          <Filter />
          <SortBar />
        </Box>
        <Box className="pt-2" />
        <Box className="px-8 px-0--sm px-0--md">
          <Container>
            <Row>
              <Col span={2} className="d-none--sm d-none--md">
                <aside className="d-none--sm d-none--md">
                  <p className="fs-5 fw-700 h-10 flex flex-middle">Filters</p>
                  <Box className="pt-8" />
                  <Filter />
                </aside>
              </Col>
              <Col span={10} sm={12} md={12}>
                <main>
                  <Box className="px-3 d-none--sm d-none--md">
                    <SortBar />
                    <Box className="pt-4" />
                  </Box>
                  <List resultData={savedResult} loading={loading} />
                </main>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Results