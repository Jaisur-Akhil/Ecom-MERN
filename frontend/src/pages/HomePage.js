import React from 'react'
import products from '../Products'
import Product from '../component/Product.js';
import { Row, Col } from 'react-bootstrap';
const HomePage = () => {
  return (
    <div>
        <h1>Latest Product</h1>
        <Row>
            {products.map((product)=>{
                return (
                    <Col sm={12} md={6} lg={4} x1={3}>
                        <Product product={product} key={product._id}/>
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default HomePage