import React from 'react';
import {Card} from 'react-bootstrap';

const Product = ({product}) => {
  return (
    <div>
        <Card className="my-3 p-0">
            <a href={`product/${product._id}`}>
                <Card.Img src={product.image} varient='top'/>
            </a>
            <Card.Body>
                <a href={`product/${product._id}`} style={{color:'dimgray' , textDecoration:'none'
            }}>
                <Card.Title as = 'p'>
                    <strong>{product.name}</strong>
                </Card.Title>
                    
                </a>
                <Card.Text as = "div">
                    <div className='my-2'>
                        {product.rating} from {product.namReviews} reviews
                    </div>
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