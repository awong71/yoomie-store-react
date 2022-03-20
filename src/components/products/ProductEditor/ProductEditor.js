import React from 'react';

import { ProductDataEntryForm } from './../ProductDataEntryForm';
import { ProductPreview } from './../ProductPreview';
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm/>
           <ProductPreview/>

        </ProductEditorStyles>
  )
}

export default ProductEditor