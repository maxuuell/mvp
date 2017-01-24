class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      // $body : $('body'),
      // $button : $('#button'),
      // $entry : $('#entry'),
      // // $inputValue : this.$entry.val(),
      // $script : $('script')
    }
  }

  // sendRequest () {
  //   // set script tag with source to api
  //   console.log("Clicked!");
  //   $script.src = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=processResponse&search=${$inputValue}`;

  //   $body.append($scipt);

  //   return false;
  // }

  // processResponse (response) {
  //   console.log("It worked!", response);
  // }

  render () {
    return (
      <div>
        <SearchBar />
        <ArticleList video={this.state} />
      </div>
    )
  }
  
}

window.App = App;