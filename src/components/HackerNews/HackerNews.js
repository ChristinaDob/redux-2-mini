import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
// connect is a higher order function that will accept a coponent and return
import { connect } from 'react-redux';
import { requestArticles } from './../../ducks/hackerNewsReducer';

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestArticles();
  }

  render() {
    console.log(this.props);
    const articles = this.props.articles.map(article => (
      <Card key={article.id} article={article} />
    ));
    return (
      <div className="news-container">
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.hackerNews;
}

const mapDispatchToProps = {
  requestArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HackerNews);

const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
};
