import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg';


// stateless vs statefull
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render')
//         // destructuring array/object
//         const { listUsers } = this.props;
//         // console.log(listUsers);
//         // console.table(listUsers);
//         // props => viết tắt properties
//         return (
//             <div className="display-infor-container">


//                 {true &&
//                     // Fragment
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 // convert string to number javascript thêm dấu + ở phía trước
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
//                                     <div>
//                                         <div>My name's {user.name} </div>
//                                         <div>My age's {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>

//                             )
//                         })}

//                     </>
//                 }
//             </div>
//         )
//     }
// }


const DisplayInfor = (props) => {
    const { listUsers } = props;
    // Bien            // ham cap nhat giá trị
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    //  tuowng đương
    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

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
