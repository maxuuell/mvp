'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      value: '',
      articles: []
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.processResponse = _this.processResponse.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + this.state.value + '&callback=?', function (response) {
        _this2.processResponse(response);
      });

      event.preventDefault();
    }
  }, {
    key: 'processResponse',
    value: function processResponse(response) {
      for (var i = 0; i < response[1].length; i++) {
        this.state.articles[i] = {
          title: response[1][i]
        };
      };

      for (var i = 0; i < response[2].length; i++) {
        this.state.articles[i].description = response[2][i];
      }

      for (var i = 0; i < response[3].length; i++) {
        this.state.articles[i].link = response[3][i];
      }

      console.log(this.state.articles);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchBar, {
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          value: this.state.value
        }),
        React.createElement(ArticleList, { articles: this.state.articles })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;