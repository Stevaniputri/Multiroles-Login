import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ioPerson, IoPricetag, IoHome, IoLogOut, IoPerson} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset} from "../features/authSlice";

const Sidebar = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);
    const logout = () =>{
        dispacth(LogOut());
        dispacth(reset());
        navigate("/");
    };
    
  return (
    <div>
        <aside className="menu pl-2 has-shadow">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}><IoPricetag/>Products</NavLink>
                </li>
            </ul>
            {user && user.role === "admin" && (
                <div>
                    <p className="menu-label">Admin</p>
                    <ul className="menu-list">
                        <li>
                            <NavLink to={"/users"}><IoPerson/>Users</NavLink>
                        </li>
                    </ul>                   
                </div>
            )}

            <p className="menu-label">
                Setting
            </p>
            <ul className="menu-list">
                <li><button onClick={logout} className='button is-white'><IoLogOut/>Logout</button></li>
            </ul>
        </aside>
    </div>
  )
}

export default Sidebar