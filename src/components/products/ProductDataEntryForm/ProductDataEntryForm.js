import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles';
import {Label, Input} from './../../../ui/forms';
import { TextArea } from './../../../ui/forms/textarea'
import { ProductImageDropBox } from './../ProductImageDropBox';
function ProductDataEntryForm ({children,handleProductName,handleProductPrice,setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
           </ProductImage>
        <fieldset>
           <ProductName>
            <Label>Product Name</Label>
            <Input onChange={(e)=> handleProductName(e.target.value.trim())} maxLength={30}/>
           </ProductName>

           <ProductPrice>
            <Label>Product Price</Label>
            <Input onChange={(e)=> handleProductPrice(e.target.value.trim())} maxLength={8}/>
           </ProductPrice>
           </fieldset>
           <ProductDescription>
            <Label>Product Description</Label>
            <TextArea rows={6}/>
           </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm