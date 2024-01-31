import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate,Link } from "react-router-dom";
const pages = [];
const settings = [{ name: "Login", link: "/user-auth" }];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    
    
    <nav class="main-menu">
           
</nav><html>
  <head>
 
  </head>
  <body><div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                        <Link to='/home'>
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Home
                        </span>
                        </Link>
                  
                </li>
                <li class="has-subnav">
                         <Link to='/Lab'>
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Class Library
                        </span>
                         </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to='/live'>
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                           Live Class
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to='/Instruction'>
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                            Instructional Video
                        </span>
                        </Link>
                   
                </li>
                <li>
                        <Link to='/Custom'>
                        <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                        Customize Yoga Program
                        </span>
                        </Link>
                    
                </li>
                <li>
                     <Link to ='/progress'>
                       <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                        Progress Tracking
                        </span>
                        </Link>
                    
                </li>
                <li>
                   <Link to='/goals'>
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                        Yoga Challenges and Goals
                        </span>
                        </Link>
                </li>
                <li>
                        <Link to='/community'>
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                        Community and Social Features
                        </span>
                        </Link>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        </body>
        </html>
    </>
  );
}
export default Navbar;
