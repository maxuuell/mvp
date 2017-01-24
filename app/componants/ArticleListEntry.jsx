var ArticleListEntry = (props) => {
  console.log(props);
  
  return (
  <div className="article-entry-container">
    <div className="article-title">{props.article.title}</div>
    <div className="article-description">{props.article.descriptiong}</div>
    <a href={props.article.link} target="_blank">Article Source</a>
  </div>
  )
}

window.ArticleListEntry = ArticleListEntry;