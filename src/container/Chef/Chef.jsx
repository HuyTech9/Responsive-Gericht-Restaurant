import React from 'react'
import "./Chef.css";
import {images} from "../../constants";
import {SubHeading} from "../../components";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt='chef img'/>
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className ="headtext__cormorant"> What we believe in </h1>
        
          <div className="app__chef-content">
            <div className="app__chef-content_quote">
            <img src={images.quote} alt='quote' />
            <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis quod nisi laborum atque aliquid esse libero laboriosam, voluptatem eveniet quam odit molestiae quaerat delectus unde consequuntur distinctio impedit ut? </p>
          </div>
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt in dolorum placeat illo unde similique iure accusamus ad voluptas animi sequi laborum voluptate soluta blanditiis doloribus doloremque, sapiente error!</p>
          </div>
          <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensan">Chef & Founder</p>
            <img src={images.sign} alt='sign'/>
          </div>
      </div>
    </div>
  )
}

export default Chef