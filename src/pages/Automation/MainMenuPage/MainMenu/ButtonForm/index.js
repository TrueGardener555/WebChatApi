import React from 'react'
import { Form, Icon, Input, Button, Upload } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input

@Form.create()
class ButtonForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName')(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Your name"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('mail')(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Your email"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('message')(<TextArea rows={3} placeholder="Your message" />)}
        </FormItem>
        <FormItem>
          <Button className="mr-2" type="primary" style={{ width: 200 }}>
            <i className="fa fa-send mr-2" />
            Send
          </Button>
          <Upload>
            <Button>
              <Icon type="upload" /> Attach File
            </Button>
          </Upload>
        </FormItem>
      </Form>
    )
  }
}

export default ButtonForm
