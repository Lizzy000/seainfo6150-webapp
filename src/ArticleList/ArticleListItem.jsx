import React from "react";
import PropTypes from "prop-types";
import SlugButton from "./SlugButton.jsx"
import styles from "./ArticleListItem.module.css"

const ArticleListItem = props => {


     const article = props.article;


    return (

                <section>
                    <h3>{article.title}</h3>
                    <p>{article.shortText}</p>
                    <time dateTime={article.pubYear}>
                        {article.pubDate}
                        <SlugButton article={article}/>
                    </time>


                </section>



    );
}
ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;