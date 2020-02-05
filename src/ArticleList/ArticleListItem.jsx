import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = props => {


    const article = props.article;
    const slug = article.slug;

    return (
        <section>
            <h3>{article.title}</h3>
            <p>{article.shortText}</p>
            <time dateTime={article.pubYear}>
                {article.pubDate}
                <button onClick={() => alert(slug)}>
                    show article slug
                </button>

            </time>

        </section>


    );
}
ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;