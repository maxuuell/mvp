var ArticleList = (props) => {
  return (
  <div className="articles-container">
    {props.articles.map((article) => 
    <ArticleListEntry 
      title={article.title}
      description={article.description}
      link={article.link} />
    )}
  </div>
  )
}

window.ArticleListEntry = ArticleListEntry;