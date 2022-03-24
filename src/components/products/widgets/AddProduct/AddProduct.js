import React, {useState} from 'react';
import {useNumberFormat } from './../../../../hooks/useNumberFormat'
import { useAddNewProduct } from '../../../../hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor } from './../../../../components/products/ProductEditor'
import { EditorFeedBack } from 'components/products/EditorFeedBack';
import ProductPreview from './../../../../assets/img/logo-nobg.png'


const defaults ={
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  name: "ProductName",
  price: 230.96
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }
  function handleProductPrice(price){
    setProductPrice(formatter(price))
  }


  function handleSubmit(e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }

  function handleProductDescription(description){
    setProductDescription(description)
  }

    if(isWriting){
      return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>

    }else{
      return (
        <AddProductStyles  {...props}>
           <ProductEditor 
           productName={productName} 
           productPrice={productPrice} 
           productImage={productImage}
           productDescription={productDescription}
           handleProductName={handleProductName}
           handleProductPrice={handleProductPrice}
           handleProductDescription={handleProductDescription}
           setProductImage={setProductImage}
           handleSubmit={handleSubmit}
           />
        </AddProductStyles>
  )
    }
}

export default AddProduct