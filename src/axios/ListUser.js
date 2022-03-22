import React, { Component } from 'react';
import axios from 'axios';

class ListUser extends Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {/* //index của mảng bắt đầu từ số 0 nên +1 để hiển thị STT */}
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default ListUser;