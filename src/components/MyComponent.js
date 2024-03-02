// class component
// function component

import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        // Cách 1 code thông thường
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // this.setState({
        //     listUsers: listUsersNew
        // })

        // Cách 2 dùng toán tử ...
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]  // thêm vào đầu mảng
            // listUsers: [...this.state.listUsers,userObj]  // thêm vào cuối mảng
        })

    }
    render() {

        // DRY: dont't repeat youseft
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser} // truyền 1 function thì không dùng dấu ()
                />
                <br></br>
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div>

        );
    }
}

export default MyComponent;
