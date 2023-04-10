import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating'
const Product = ({product}) => {
  return (
    <div>
        <Card className="my-3 p-0">
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image} varient='top'/>
            </Link>
            <Card.Body>
                <Link to={`product/${product._id}`} style={{color:'dimgray' , textDecoration:'none'
            }}>
                <Card.Title as = 'p'>
                    <strong>{product.name}</strong>
                </Card.Title>
                    
                </Link>
                <Card.Text as = "div">
                    {/* <div className='my-2'>
                        {product.rating} from {product.namReviews} reviews
                    </div> */}
                    <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>

                </Card.Text>
                <Card.Text as = 'h4'>
                    &#x20B9; {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product