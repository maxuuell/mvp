var ArticleList = (props) => {
  return (
  <div className="articles-container">
    <ArticleListEntry 
      title={props[0]}
      article={props[1]}
      link={props[2]} />
  </div>
  )
}

window.ArticleListEntry = ArticleListEntry;