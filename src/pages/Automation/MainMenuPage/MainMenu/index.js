import React from 'react'
import { Input, Icon, Menu, Dropdown } from 'antd'
import ButtonForm from './ButtonForm'
import Avatar from 'components/CleanComponents/Avatar'
import data from './data.json'
import './style.scss'

const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Comment
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
)
class MainMenu extends React.Component {
  state = {
    comments: data.comments,
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  render() {
    let {comments} = this.state
    return (
      <section>
        <div className="card-header">
          <div className="utils__title">
            <strong>MainMenu Page</strong>
          </div>
        </div>
        <div className="card-body">
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="blog-feed__comments mb-4">
              <div className="blog-feed__comments-title">Buttons Lists</div>
              <div className="blog-feed__comments-wrap mt-3">
                {comments.length > 0 && (
                  <div className="blog-feed__comments">
                    {comments.map((postComment, index) => (
                      <div
                        className={
                          postComment.subComments !== undefined
                            ? 'blog-feed__comment-item clearfix pb-0'
                            : 'blog-feed__comment-item clearfix'
                        }
                        key={index}
                      >
                        <div className="blog-feed__comment-avatar">
                          <Avatar size="50" src={postComment.avatar} border={false} />
                        </div>
                        <div className="blog-feed__comment-content">
                          <div className="mb-3 clearfix">
                            <div className="pull-left">
                              <strong>{postComment.name}</strong> posted:
                              <br />
                              <small className="text-muted">{postComment.date}</small>
                            </div>
                            <div className="pull-right">
                              <a href="javascript: void(0);" className="mr-3">
                                <i className="icmn-heart mr-2" />
                                {postComment.clickCount > 0 && (
                                  <span>{postComment.clickCount + ' Likes'}</span>
                                )}
                                {postComment.clickCount === 0 && (
                                  <span>{postComment.clickCount + ' Like'}</span>
                                )}
                              </a>
                            </div>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: postComment.content }} />
                          {postComment.subComments && (
                            <div className="blog-feed__subcomments-content">
                              {postComment.subComments.map((subComment, index) => (
                                <div className="blog-feed__comment-item clearfix" key={index}>
                                  <div className="blog-feed__comment-avatar">
                                    <Avatar size="50" src={subComment.avatar} border={false} />
                                  </div>
                                  <div className="blog-feed__comment-content">
                                    <div className="mb-3 clearfix">
                                      <div className="pull-left">
                                        <strong>{subComment.name}</strong> posted:
                                        <br />
                                        <small className="text-muted">{subComment.date}</small>
                                      </div>
                                      <div className="pull-right">
                                      <a href="javascript: void(0);" className="mr-3">
                                        <i className="icmn-heart mr-2" />
                                          {postComment.clickCount > 0 && (
                                            <span>{postComment.clickCount + ' Likes'}</span>
                                          )}
                                          {postComment.clickCount === 0 && (
                                            <span>{postComment.clickCount + ' Like'}</span>
                                          )}
                                        </a>
                                      </div>
                                    </div>
                                    <div
                                      dangerouslySetInnerHTML={{ __html: subComment.content }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
                                            HAHA
          </div>
        </div>
      </section>
    )
  }
}

export default MainMenu
