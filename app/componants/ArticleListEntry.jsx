var ArticleListEntry = (props) => {
  return (
  <div className="article-entry-container">
    <div className="article-title">{props[0]}</div>
    <div className="article-description">{props[1]}</div>
    <a href="{props[2]" target="_blank">Article Source</a>
  </div>
  )
}

window.ArticleListEntry = ArticleListEntry;