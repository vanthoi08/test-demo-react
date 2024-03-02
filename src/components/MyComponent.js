// class component
// function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HaryPhamDev", age: "69" },
        ]
    }

    render() {

        // DRY: dont't repeat youseft
        return (
            <div>
                <UserInfor />
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
