import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ListUser extends Component {
    render() {
        return (
            <div>
                <p>đây là trang list user</p>
                <ul>
                    <li>
                        <Link to="/cms/list-user/1">User 1</Link>
                    </li>
                    <li>
                        <Link to="/cms/list-user/2">User 2</Link>
                    </li>
                    <li>
                        <Link to="/cms/list-user/3">User 3</Link>
                    </li>
                    <li>
                        <Link to="/cms/list-user/4">User 4</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default ListUser
