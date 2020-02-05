import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu} from "element-react";
import 'element-theme-default';



class DefaultHeader extends Component {
  render() {
    return (
      <div>
              <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
                  <Menu.Item index="1">
                      <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item index="2">
                      <Link to="/contact">Contact</Link>
                  </Menu.Item>
                  <Menu.Item index="3">
                      <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item index="4">
                      <Link to="/register">Đăng ký</Link>
                  </Menu.Item>
                  <Menu.Item index="5">
                      <Link to="/login">Đăng nhập</Link>
                  </Menu.Item>
                  <Menu.Item index="6">
                      <Link to="/cms/dashboard">CMS</Link>
                  </Menu.Item>
              </Menu>
      </div>
    );
  }
}


export default DefaultHeader;
