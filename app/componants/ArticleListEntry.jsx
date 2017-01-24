var ArticleListEntry = (props) => {
  return (
  <div className="article-entry-container">
    <div className="article-title">{props.title}</div>
    <div className="article-description">{props.description}</div>
    <a href={props.link} target="_blank">Article Source</a>
  </div>
  )
}

window.ArticleListEntry = ArticleListEntry;