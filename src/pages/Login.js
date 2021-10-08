import { Form, Input, Button, Checkbox } from 'antd';
import { login } from '../utils';

const Login = (props) => {
  const handleLogin = () => {
    login();
    props.history.push('/dashboard');
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      style={{
        width: '400px',
        height: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      name='login'
      initialValues={{
        remember: true,
      }}
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' onClick={() => handleLogin()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
