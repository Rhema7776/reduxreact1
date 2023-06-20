import React, { Component, useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { render } from "react-dom";

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.i} className="">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Avatar src="/img/face-2.jpg" alt="avatar" />
                <div>
                  <Link>
                    <Typography variant="h6">{post.title}</Typography>
                  </Link>

                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {post.body}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="">No posts yet</div>
    );
    return (
      <div>
        <h4>Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
