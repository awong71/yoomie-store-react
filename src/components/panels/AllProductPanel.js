import React from 'react';
import { useGetProducts } from 'hooks/useGetProducts';

import {PanelStyles, PanelBody, PanelHeader} from './styles'
import {ProductCard} from 'components/products/ProductCard'

function AllProductPanel({title, ...props}) {
    const productData = useGetProducts('products')
    

    return ( 
           <PanelStyles>
               <PanelHeader>
                   <h2>{title || "Display Panel"}</h2>
               </PanelHeader>
               <PanelBody>
                {productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) : <p>spinner react spinners</p>}


               </PanelBody>
           </PanelStyles>
     );
}

export default AllProductPanel;