import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg';


// stateless vs statefull
const DisplayInfor = (props) => {
    const { listUsers } = props;
    // Bien            // ham cap nhat giá trị
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // Destructuring assignment
    //  tuowng đương
    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
        // this.state = {
        //     isShowHideListUser: true
        // }
    }

    console.log('>>> call me render')

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users');
            }
            console.log('>>> call me useEffect ')
        }, [listUsers]
    );

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users');
            }
            console.log('>>> call me useEffect ')
        }, []
    );




    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()} >
                    {isShowHideListUser === true ? "Hide list users" : "Show List user"}
                </span>
            </div>
            {isShowHideListUser &&
                // Fragment
                <>
                    {listUsers.map((user, index) => {
                        return (
                            // convert string to number javascript thêm dấu + ở phía trước
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                <div>
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                                <hr />
                            </div>

                        )
                    })}

                </>
            }
        </div>
    )


}
export default DisplayInfor;
