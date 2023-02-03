import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
const setActiveClass = ({isActive}:any)=>isActive? classes.activeLink:classes.item
const Navbar = () => {
    return (
        <div>
            <nav className={classes.sidebar}>
                <div className={classes.item}>
                    <NavLink to={PATH.LOGIN} className={setActiveClass}>Login</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={PATH.REGISTRATION} className={setActiveClass}>Registration</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={PATH.RECOVERY_PASSWORD} className={setActiveClass}>Recovery Password</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={PATH.SET_PASSWORD} className={setActiveClass}>Set Password</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={PATH.PROFILE} className={setActiveClass}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/test' className={setActiveClass}>Test</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/*' className={setActiveClass}>Error404</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;