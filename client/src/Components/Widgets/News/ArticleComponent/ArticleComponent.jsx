import React, { Component } from "react";
import "./ArticleComponent.css";
import Axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default class ArticleComponent extends Component {
  state = {
    title: "",
    description: "",
    image: null,
    url: "",
    tags: "",
  };

  async componentDidMount() {
    const { image, title, description, url } = this.props;
    let articleImage = image;
    let articleDescription = description;
    let articleTitle = title;
    let articleURL = url;
    if (image !== null) {
        let setImage = articleImage.splice(0, 1);
       this.setState({
        title: articleTitle,
        description: articleDescription,
        image: setImage[0].url,
        url: articleURL,
        tags: "#NEWS",
      });
    } else {
      this.setState({
        title: articleTitle,
        description: articleDescription,
        image:
          "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png",
        url: articleURL,
        tags: "#NEWS",
      });
    }
  }

  setFormData() {
  }

  render() {
    const { image, title, url } = this.state;
    const { handleSubmit } = this.props;
    return (
      <>
        {image == null ? (
          <ClipLoader
            size={150}
            color={"#123abc"}
            loading={this.state.loading}
          />
        ) : (
          <div className='articleCard'>
            <a href={url} target='_blank'>
              <img src={image} />
            </a>
            <div className='articleHeadline'>
              <h3>{title}</h3>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(this.state);
                handleSubmit(this.state);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M18,34A16,16,0,1,0,2,18,16,16,0,0,0,18,34ZM16.4,11.6a1.6,1.6,0,1,1,3.2,0v4.8h4.8a1.6,1.6,0,1,1,0,3.2H19.6v4.8a1.6,1.6,0,1,1-3.2,0V19.6H11.6a1.6,1.6,0,1,1,0-3.2h4.8Z'
                  transform='translate(-2 -2)'
                  fill-rule='evenodd'
                />
              </svg>
            </button>
          </div>
        )}
      </>
    );
  }
}
