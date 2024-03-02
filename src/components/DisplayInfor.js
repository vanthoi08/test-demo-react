import React from "react";
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // console.log(this.props)
        // destructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers);
        // console.table(listUsers);
        // props => viết tắt properties
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide list uses :" : "Show list users :"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;
