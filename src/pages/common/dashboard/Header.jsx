import React from "react"
import { useState, useEffect } from "react";
import { IconButton, SvgIcon } from "@mui/material"
import { Image } from 'react-bootstrap'
import { menuItems } from "../../../utilities/config"
import { useNavigate } from "react-router-dom"

// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/auth";

function DrawIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M3.90625 13.7188C4.29688 14.1094 5 13.8359 5 13.25V5.75C5 5.20312 4.29688 4.92969 3.90625 5.32031L0.15625 9.07031C0.0390625 9.1875 0 9.34375 0 9.5C0 9.69531 0.0390625 9.85156 0.15625 9.96875L3.90625 13.7188ZM16.875 15.75H0.625C0.273438 15.75 0 16.0625 0 16.375V17.625C0 17.9766 0.273438 18.25 0.625 18.25H16.875C17.1875 18.25 17.5 17.9766 17.5 17.625V16.375C17.5 16.0625 17.1875 15.75 16.875 15.75ZM16.9922 10.75H7.96875C7.69531 10.75 7.5 10.9844 7.5 11.2578V12.7812C7.5 13.0547 7.69531 13.25 7.96875 13.25H16.9922C17.2656 13.25 17.5 13.0547 17.5 12.7812V11.2578C17.5 10.9844 17.2656 10.75 16.9922 10.75ZM16.9922 5.75H7.96875C7.69531 5.75 7.5 5.98438 7.5 6.25781V7.78125C7.5 8.05469 7.69531 8.25 7.96875 8.25H16.9922C17.2656 8.25 17.5 8.05469 17.5 7.78125V6.25781C17.5 5.98438 17.2656 5.75 16.9922 5.75ZM16.875 0.75H0.625C0.273438 0.75 0 1.0625 0 1.375V2.625C0 2.97656 0.273438 3.25 0.625 3.25H16.875C17.1875 3.25 17.5 2.97656 17.5 2.625V1.375C17.5 1.0625 17.1875 0.75 16.875 0.75Z" fill="#F96302" />
        </SvgIcon>
    )
}

const Mainhead = ({ menu, expanded, onToggleSidebar, authstate, logout }) => {
  const currentItem = menuItems.find((m) => m.key === menu);
  const getHeaderStyle = () => {
      return !expanded ? "dashboard-header expandable" : "dashboard-header";
  }
  const navigate = useNavigate()
  const handleRoute = (data) => {
    navigate(`/${data}`)
  }
  const [isAuth, setIsAuth] = useState()
  const [AuthUser, setAuthUser] = useState({})
  // Save user token to redux
  useEffect(() => {
    if (localStorage.userToken) {
      setIsAuth(true)
      setAuthUser((JSON.parse(localStorage.userToken)).user)
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className={getHeaderStyle()}>
      <IconButton onClick={() => onToggleSidebar()}>
        <DrawIcon />
      </IconButton>
      <div className="dashboard-header-title mb-2">
        <div>{currentItem ? currentItem.title : "Home"}</div>
      </div>
      <div className="dashboard-top-avatar">
      {
        isAuth ? (
          <li className="nav-item dropdown">
            <a className="dropbtn nav-link">
              <div className="d-flex" style={{ cursor: 'pointer' }}>
              { AuthUser.avatar === undefined ?
                (
                  <Image className="me-2 mt-2"
                    roundedCircle width={35} height={35}
                    src={require("../../../assets/images/unknown_user.png")} />
                ) :
                (
                  <Image className="me-2 mt-2"
                    roundedCircle width={35} height={35}
                    src={require(`../../../assets/images/uploads/${AuthUser.avatar}`)} />
                )
              }
              <div className="fs-7 mt-2 text-primary">{AuthUser.nick_name !== null ? AuthUser.nick_name : AuthUser.first_name + " " + AuthUser.last_name}</div>
              </div>
            </a>
            <div className="dropdown-content">
              <div className="fs-5 text-end py-2 px-3">
                <h5 style={{ cursor: 'pointer' }} className="mb-3 text-primary" onClick={()=>handleRoute('profile')}>&nbsp;Profile &nbsp;</h5>
                { AuthUser.role === 3 ? (
                  <h5 style={{ cursor: 'pointer' }} className="mb-3 text-primary" onClick={()=>handleRoute('dashboard')}>&nbsp;Dashboard &nbsp;</h5>
                ) : (<div />)}
                <h5 className="text-primary" style={{ cursor: 'pointer' }} onClick={()=>logout()}>&nbsp;Log out&nbsp;</h5>
              </div>
            </div>
          </li>
        ) : (
          <div>
            <span className="text-primary" onClick={()=>handleRoute('signin')}>&nbsp;Sign In &nbsp;</span>
            {/* <span className="text-primary" onClick={()=>handleRoute('signup')}>&nbsp;Sign Up &nbsp;</span> */}
          </div>
        )
      }
    </div>
    </div>
  );
};

Mainhead.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Mainhead);
