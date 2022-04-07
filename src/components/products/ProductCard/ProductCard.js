import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'


function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, imageUrl, productDescription} = {...product}
  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
             <img src={imageUrl} alt="Yoomie Logo" width="320" height="184"/>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductCard