import React from 'react'
import CartList from 'components/CartList'
import { Container, Row, Col, Box } from '../../components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PriceBlock from 'components/PriceBlock'

function CartPage() {
  return (
    <>
      <Header isCartPage/>
      <Box className="px-8 py-10 px-2--sm px-2--md" style={{minHeight: 'calc(100vh - 116px)'}}>
        <Container>
          <Row>
            <Col span={8} sm={12} md={12}>
              <main>
                <CartList />
              </main>
            </Col>
            <Col span={4} md={12} sm={12}>
              <aside>
                  <PriceBlock />
              </aside>
            </Col>
          </Row>
        </Container>
      </Box>
      <Footer/>
    </>

  )
}

export default CartPage