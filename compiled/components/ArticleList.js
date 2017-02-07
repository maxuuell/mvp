"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleList = undefined;

var _ArticleListEntry = require("./ArticleListEntry.jsx");

var ArticleList = exports.ArticleList = function ArticleList(props) {
  return React.createElement(
    "div",
    { className: "article-list-container" },
    props.articles.map(function (article) {
      return React.createElement(_ArticleListEntry.ArticleListEntry, {
        title: article.title,
        description: article.description,
        link: article.link });
    })
  );
};