import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import useInput from '../../hooks/useInput';
import { Global } from './styles';
import logoImage from '../../pages/LOGO.png';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onFinish = useCallback(() => {
        console.log('submit', id, password);
    }, []);

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Global />
            <div className="logo" style={{ marginBottom: '35px' }}>
                <img src={logoImage} alt="" />
            </div>
            <Form.Item
                label="아이디"
                name="user-id"
                rules={[{ required: true, message: '아이디를 입력해주세요' }]}
            >
                <Input onChange={onChangeId} />
            </Form.Item>
            <Form.Item
                label="비밀번호"
                name="user-password"
                rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
            >
                <Input.Password onChange={onChangePassword} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    htmlType="submit"
                >
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
