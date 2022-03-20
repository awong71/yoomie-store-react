import React from 'react';
import {PanelStyles, PanelBody, PanelHeader} from './styles'
import { ProductEditor} from './../../components/products/ProductEditor';

function AddProductPanel({title, ...props}) {
    return ( 
           <PanelStyles>
               <PanelHeader>
                   <h2>{title || "Display Panel"}</h2>
               </PanelHeader>
               <PanelBody>
                    <ProductEditor/>
               </PanelBody>
           </PanelStyles>
     );
}

export default AddProductPanel;