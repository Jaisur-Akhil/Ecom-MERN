import React from 'react'
import PropTypes from 'prop-types';
//runtime type cheching for react props 
const Rating = ({value ,text, color}) => {
  return (
    <div className='rating'>
        {[1,2,3,4,5].map((elem,index)=>{
            <span key={index}>
                <i style={{color:color, fontSize:'0.9em'}} 
                className={
                    value>= elem? 'fas fa-star' : value >= elem - 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }
                title={`${value} Stars`}
                />
            </span>
        })}
        <span style={{fontSize:'0.9em'}}>{text && text}</span>
    </div>
  )
}

Rating.defaultProps={
    color:'#f8e825',
};

Rating.prototype={
    value:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    color:PropTypes.string
}

export default Rating