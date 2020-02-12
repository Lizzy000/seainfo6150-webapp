import React from "react";
import styles from "./SlugButton.module.css"

const SlugButton = props => {

    const article = props.article;
    const buttonText = article.author;
    const slug = article.slug;

    return (
        <button onClick={() => alert(slug)}>
            {buttonText}
        </button>
    )
}


export default SlugButton;