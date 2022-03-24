import React from 'react';
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/buttons';
import {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'

function EditorFeedBack ({children,status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
          {
            !status
            ?
            <FeedBack>
            <AiOutlineCheckCircle color='d9f99d' size="12rem"/>
            <FeedBackMessage>
              Product Uploaded Successfully
            </FeedBackMessage>
          </FeedBack>
          :
          <FeedBack>
            <AiOutlineCloudUpload color='d9f99d' size="12rem"/>
            <FeedBackMessage>
              Product Uploading New Product
            </FeedBackMessage>
          </FeedBack>
          }

          <FeedBackOption>
              <Button bc="tomato" color='white'
              onClick={()=> writeCompleted(false)}
              disabled={status}
              >Add Another Product</Button>
              <Button bc="cornflowerblue" color='white'
              onClick={()=> navigator('/dashboard')}
              >View All Products</Button>
          </FeedBackOption>
        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack