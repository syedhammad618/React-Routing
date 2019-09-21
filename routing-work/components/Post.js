// import React, { Component } from "react";

// export default class Post extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: null
//     };
//   }
//   componentDidMount() {
//     console.log(this.props);

//     let id = this.props.match.params.Post_id;
//     this.setState({ id: id });
//   }

//   render() {
//     return <h4 className="center">{this.state.id}</h4>;
//   }
// }

import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: null
    };
  }
  componentDidMount() {
    let id = this.props.match.params.Post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    // let { posts } = this.state;
    // const PostList = this.state.posts ? (
    //   <div className="post card">
    //     <div className="card-content">
    //       <span className="card-title">{this.state.posts.title}</span>
    //       <p>{this.state.posts.body}</p>
    //     </div>
    //   </div>
    // ) : (
    //   <div className="center">loading post...</div>
    // );
    // return <div className="container">{PostList}</div>;

    const postList = this.state.posts.length ? (
      this.state.posts.map((post, i) => {
        return (
          <div className="post card" key={i}>
            <div className="card-content">
              <span className="card-title">
                {post.title}
                <p className="center">{this.state.id}</p>
              </span>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">loading post...</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>{postList}</p>
      </div>
    );
  }
}
