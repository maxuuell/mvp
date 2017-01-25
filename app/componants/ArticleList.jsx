var ArticleList = (props) => {
  return (
  <div className="article-list-container">
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