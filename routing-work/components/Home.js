import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data.slice(0, 5) });
      // console.log(this.state.posts);
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="centre">no post yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>{postList}</p>
      </div>
    );
  }
}
