class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.processResponse = this.processResponse.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(event) {

    $.getJSON(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${this.state.value}&callback=?`, (response) => {this.processResponse(response)})
    
    event.preventDefault();
  }

  processResponse (response) {
    var subArticles = [];

    for (var i = 0; i < response[1].length; i++) {
      subArticles[i] = {
        title: response[1][i]
      }
    };

    for (var i = 0; i < response[2].length; i++) {
      subArticles[i].description = response[2][i];
    }

    for (var i = 0; i < response[3].length; i++) {
      subArticles[i].link = response[3][i];
    }
    
    this.setState({articles: subArticles})
    console.log("state of articles: ", this.state.articles)
  }

  render () {
    return (
      <div>
        <SearchBar 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <ArticleList articles={this.state.articles} />
      </div>
    )
  }
  
}

window.App = App;