import React, { Component } from 'react';
import { Button,Modal,Input, Icon} from 'antd';
import axios from 'axios';

import './header.css';

class Header extends Component {
  constructor(props) {
        super(props);
        this.state = {
            visible: false,
            userName: '',
            password:''
        }
        
       
  } 
  componentDidMount(){
      
  }
  showModal(){
    this.setState({
      visible: true,
    });
  }
  handleOk(e){
    this.Login('xys','admin');
    this.setState({
      visible: false,
    });
  }
  handleCancel(e){
    this.setState({
      visible: false,
    });
  }
  Login(name,password){
    console.log('dd')
    axios({
        method: 'get',
        url: 'http://www.233ar.com:8080/user/logindo',
        data: {
          user_name:name,
          login_password:password
        }
    }).then(function (response) {
    console.log(response);
  });
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  emitEmptyx = () => {
    this.passwordInput.focus();
    this.setState({ password: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  onChangepassword = (e) =>{
    this.setState({ password: e.target.value });
  }
  render() {
    console.log(this.state)
    const { userName,password} = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const suffixpassword = password ? <Icon type="close-circle" onClick={this.emitEmptyx} /> : null;
    return (
        <div className="Header">
           	<div className="HeaderIn">
               <ul className="HeaderInLeft">
               		<li className="HeaderLi">
               			<span>您好，欢迎来到FashionShow！</span>
               		</li>
               		<li className="HeaderLi">
               			<Button size="small" style={{border:'none',background:'transparent'}}  onClick={this.showModal.bind(this)}>登录</Button>
               		</li>
               		<li className="HeaderLi">
               			<Button size="small" style={{border:'none',background:'transparent'}} >注册</Button>
               		</li>
               </ul>
        	 </div>
           <Modal
            title="登录"
            visible={this.state.visible}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)} cancelText="取消" okText="登录">
              <Input
                placeholder="Username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                 ref={node => this.userNameInput = node}
                />
                <Input
                placeholder="Password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffixpassword}
                value={password}
                onChange={this.onChangepassword}
                 ref={node => this.passwordInput = node}
                />
          </Modal>
        </div>
    );
  }
}

export default Header;
