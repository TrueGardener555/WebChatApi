import React from 'react'
import { Tabs, Input, Menu, Dropdown, Button, Icon, Tag } from 'antd'
import Avatar from 'components/CleanComponents/Avatar'
import './style.scss'
import data from './data.json'

const TabPane = Tabs.TabPane
const Search = Input.Search

const actionsMenu = (
  <Menu>
    <Menu.Item key="1">
      <Icon style={{ marginRight: 3 }} type="sound" />
      Mute
    </Menu.Item>
    <Menu.Item key="2">
      <Icon style={{ marginRight: 3 }} type="delete" />
      Delete chat
    </Menu.Item>
    <Menu.Item key="3">
      <Icon style={{ marginRight: 3 }} type="setting" />
      Settings
    </Menu.Item>
  </Menu>
)

const chatTab = chat => {
  let tabName = chat.companionName
  let chatMessages = chat.chatMessages
  let lastMessage = chatMessages[chatMessages.length - 1].content.replace(/<\/*\w*>/g, '')
  let tabImg = chat.companionImg
  return (
    <div className="messaging__tab">
      <div className="messaging__tab-avatar">
        <Avatar src={tabImg} size="50" border="true" borderColor="#fff" />
      </div>
      <div className="messaging__tab-content">
        <small className="messaging__tab-time">8:34PM</small>
        <div className="messaging__tab-name">{tabName}</div>
        <div className="messaging__tab-text" dangerouslySetInnerHTML={{ __html: lastMessage }} />
      </div>
    </div>
  )
}

const Message = message => {
  let content = message.message.content
  let messageOwner = message.message.username
  let messageImg = message.message.img
  let chatOwner = message.chatOwner
  return (
    <div
      className={`clearfix messaging__item ${
        chatOwner === messageOwner ? 'messaging__item--left' : 'messaging__item--right'
      }`}
    >
      <div className="messaging__item-avatar">
        <Avatar src={messageImg} size="50" border="false" />
      </div>
      <div className="messaging__item-content">
        <strong>{messageOwner}</strong>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

class LiveChat extends React.Component {
  state = {
    chatOwner: '',
    chatsData: [],
    activeChatNumber: 0,
  }

  changeChat = chatNumber => {
    this.setState({
      activeChatNumber: chatNumber,
    })
  }

  componentWillMount() {
    this.setState({
      chatOwner: data.chatsOwner,
      chatsData: data.chats,
    })
  }

  render() {
    let { chatOwner, chatsData, activeChatNumber } = this.state

    let selectedChatData = chatsData[activeChatNumber]
    let messagesData = selectedChatData.chatMessages
    return (
      <div className="card messaging">
        <div className="row">
          <div className="col-xl-3">
            <div className="messaging__sidebar-header">
              <Search placeholder="input search text" style={{ width: '100%' }} />
            </div>
            <div className="messaging__tabs">
              <Tabs defaultActiveKey="0" tabPosition={'left'} onChange={this.changeChat}>
                {chatsData.map((chat, index) => (
                  <TabPane tab={chatTab(chat)} key={index} />
                ))}
              </Tabs>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card-header clearfix">
              <h4 className="mt-1 mb-1 text-black d-inline-block">
                <strong>Messages</strong>
              </h4>
              <div className="pull-right">
                <Dropdown overlay={actionsMenu}>
                  <Button style={{ marginLeft: 4 }}>
                    Actions <Icon type="setting" />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className="messaging__content-wrapper">
              <div className="messaging__chat height-500">
                {messagesData.map((message, index) => (
                  <Message message={message} key={index} chatOwner={chatOwner} />
                ))}
              </div>
              <form className="form-group mt-4 mb-3">
                <textarea
                  className="form-control adjustable-textarea"
                  placeholder="Type message..."
                />
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary width-200">
                    <i className="fa fa-send mr-2" />
                    Send
                  </button>
                  <button className="btn btn-link">Attach File</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="messaging__sidebar-header">
              <h4 className="mt-1 mb-1 text-black d-inline-block">
                <strong>{selectedChatData.companionName}</strong>
              </h4>
            </div>
            <div className="row Card">
              <div className="messaging__item-thumb">
                <Avatar
                  src={selectedChatData.companionImg}
                  size="110"
                  border="true"
                  borderColor="white"
                />
              </div>
              <div className="col-xl-6">
                <p>{selectedChatData.companionName}</p>
                <p>{selectedChatData.companionName}</p>
                <p>
                  <p>{selectedChatData.companionName}</p>
                  views
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">User Tags</div>
                <div className="utils__titleDescription">
                  Block with important Recently Referrals information
                </div>
              </div>
              <div className="card-body">
                <Tag color="blue">was-raffle-ig-agosto18</Tag>
                <Tag color="blue">was-raffle-face-agosto18</Tag>
                <Tag color="blue">keyword growth tools</Tag>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">Subscribed to Sequences</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">Opted In through</div>
                <div className="utils__titleDescription">
                  <Tag color="geekblue">keyword growth tools</Tag>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="utils__title">Custom Fields</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LiveChat
