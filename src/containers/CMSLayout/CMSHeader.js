import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu} from "element-react";
import 'element-theme-default';



class CMSHeader extends Component {
  render() {
    return (
      <div>
        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Menu.Item index="1">
            <Link to="/cms/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item index="2">
            <Link to="/cms/setting">Setting</Link>
          </Menu.Item>
          <Menu.Item index="3">
            <Link to="/cms/list-user">List User</Link>
          </Menu.Item>
          <Menu.Item index="4">
            <Link to="/">Go to home</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}


export default CMSHeader;
