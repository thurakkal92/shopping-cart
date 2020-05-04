import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Box } from '../Layout'
import Cart from '../Cart'
import Search from '../Search'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Header({ isCartPage }) {
  return (
    <header className="bg-primary py-4  z-10 w-100p" style={{top: 0}}>
      <Container className="">
        <Row>
          <Col>
            <Box className="flex flex-between flex-middle px-8 px-2--sm px-2--md">
              <Link to="/">
                <FontAwesomeIcon className="c-secondary" style={{
                  fontSize: '32px'
                }} icon={faStar} />
              </Link>
              <Box className="flex flex-bottom">
                <Search />
                {!isCartPage && <><Box className="mr-6" /> <Cart /></>}
              </Box>

            </Box>

          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header