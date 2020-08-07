import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'antd'
import './login.less'
import logo from './images/logo.png'
const Item = Form.Item

/*
用户登陆的路由组件
*/
class Login extends Component {

    handleSubmit = (event)=>{
        //阻止事件的默认行为
        event.preventDefault()

        //对所有表单字段进行校验
        this.props.form.validateFields((err, values) =>{
            //校验成功
            if (!err){
                console.log('提交登录的ajax请求',values);
            }else {
                console.log('校验失败')
            }
        })

        //得到form对象
        // const form = this.props.form
        //获取表单项的输入数据
        // const values = form.getFieldsValue()
        // console.log('handleSubmit()',values);
    }

    /**
     * 对密码进行自定义验证
     */
    validatePwd = (rule, value, callback)=>{
        console.log('validatePwd()',rule, value)
        if (!value){
            callback('密码不能为空')
        }else if (value.length < 6 ){
            callback('密码长度不能小于6位')
        }else if(value.length > 16){
            callback('密码长度不能大于16位')
        }else if (!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线组成')
        }else {
            callback()  //验证通过
        }

    };

    render () {

        const form  = this.props.form
        const { getFieldDecorator } = form;

        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username',{
                                    //声明式验证：直接使用别人验证好的验证规则进行验证
                                    rules: [
                                        { required: true, whiteSpace : true, message: '用户名必须输入!' },
                                        { min: 4, message: '用户名至少4位!' },
                                        { max: 12, message: '用户名至多12位!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成!' }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',{
                                    rules: [
                                        {
                                            validator: this.validatePwd
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
                        </Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Form.create()(Login)