var ArticleListEntry = (props) => {
  return (
    <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{props.title}</span>
              <p>{props.description}</p>
            </div>
            <div className="card-action">
              <a href={props.link} target="_blank">Article Source</a>
            </div>
          </div>
        </div>
      </div>

    /*<div className="article-entry-container">
      <div className="article-title">{props.title}</div>
      <div className="article-description">{props.description}</div>
      <a href={props.link} target="_blank">Article Source</a>
    </div>*/
  )
}

window.ArticleListEntry = ArticleListEntry;