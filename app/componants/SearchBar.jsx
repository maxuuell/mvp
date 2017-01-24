class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var $script = $('script');

    $script.attr({
      src: `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=processResponse&search=${this.state.value}`
    });

    $('body').append($script);
    
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

window.SearchBar = SearchBar;