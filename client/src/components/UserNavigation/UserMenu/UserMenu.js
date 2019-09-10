import React , { useState, useEffect, useRef } from 'react';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

import style from './UserMenu.module.sass';

import { userLogout } from "../../../actions/actionCreators/userActionCreator";

import { URL } from '../../../api/baseURL'
import { ROLE, DISPLAY, VIEW } from '../../../constants'
import {closeOrOpenConnection} from "../../../actions/actionCreators/chatActionCreator";

function UserNavigationSmartphone(props){
    const { closeOrOpenConnection } = props;

    const [displayStyle, setDisplayStyle] = useState(DISPLAY.NONE);
    const toggleContainer = useRef(null);

    const toOpenMenu = () => {
        const nextDisplayStyle = displayStyle === DISPLAY.NONE ? DISPLAY.BLOCK : DISPLAY.NONE;
        setDisplayStyle(nextDisplayStyle);
    };

    const onClickOutsideHandler = (event) => {
        if (displayStyle === DISPLAY.BLOCK && !toggleContainer.current.contains(event.target)) {
            setDisplayStyle(DISPLAY.NONE)
        }
    };

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        return () => window.removeEventListener('click', onClickOutsideHandler);
    });


    const adminPanel = props.user.role === ROLE.ADMIN ?
                <Link to={URL.ADMIN_PANEL} style={{color: "#3ea9f5"}}><li>Admin panel</li></Link>
                : null;

    return (
        <div className={style.userMenu}>
            <div className={style.row}>
                    <div className={style.informUser}
                         onMouseDown={(e) => {e.preventDefault()}}
                         onClick={toOpenMenu}
                         ref={toggleContainer}
                    >
                        <div className={style.iconUser} />
                        { props.view === VIEW.DESKTOP && `Hi, ${props.user.firstName}` }
                        <i className="fas fa-angle-down" />
                    </div>

                {displayStyle === DISPLAY.BLOCK &&
                    <ul className={style.dropdownMenu} >
                        <Link to={URL.DASHBOARD}><li> View Dashboard </li></Link>
                        <Link to={URL.MY_ACCOUNT}><li> My Account </li></Link>
                        <span onClick={() => closeOrOpenConnection(props.chatIsOpen)}>
                            <li> Messages </li>
                        </span>
                        {adminPanel}
                        <span onClick={props.clickToLogout}><li>Logout</li></span>
                    </ul>
                }

                { props.view === VIEW.DESKTOP &&
                    <span onClick={() => closeOrOpenConnection(props.chatIsOpen)}
                          className={style.message}
                    >
                             <i className="far fa-envelope" />
                    </span>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    chatIsOpen: state.chatReducers.isOpen,
    user: state.userReducers.user
});
const mapDispatchToProps = dispatch => ({
    clickToLogout: () => dispatch(userLogout()),
    closeOrOpenConnection: (chatIsOpen) => dispatch(closeOrOpenConnection(chatIsOpen)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserNavigationSmartphone);

