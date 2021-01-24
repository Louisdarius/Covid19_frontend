import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  DatabaseOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (event) => setCurrent(event.key);
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/"> Coronavirus/Covid-19 </Link>
      </Item>

      <Item key="setting" icon={<SettingOutlined />} className="float-right">
        <Link to="/setting"> Setting </Link>
      </Item>

      <Item key="add" icon={<PlusCircleOutlined />} className="float-right">
        <Link to="/create"> Add</Link>
      </Item>

      <Item key="dashboard" icon={<DatabaseOutlined />} className="float-right">
        <Link to="/read"> Dashboard </Link>
      </Item>
    </Menu>
  );
};
export default Navbar;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// This was the initial Navbar. It was designed using UI material and bootstrap 4

// import React from 'react';
// import './CompStyles.css';
// import SettingsIcon from '@material-ui/icons/Settings';
// import TableChartSharpIcon from '@material-ui/icons/TableChartSharp';
// import HomeIcon from '@material-ui/icons/Home';
// import AddIcon from '@material-ui/icons/Add';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// function Navbar(){
//   return(
// <div class=" navbar navbar-expand-sm bg-light text-dark font-weight-bold mb-5  d-flex justify-content-between fixed-top">
//     <div class="p-2 ">
//       <a class="navbar-brand" href="/">
//       <LocalHospitalIcon style = {{fill: 'red', fontSize: '100px'}}/>
//        <span>Coronavirus Disease(Covid19)</span>
//        </a>
//     </div>

// <div class="p-2">
// <ul class="navbar-nav">
//     <li class="nav-item">
//       <a class="nav-link" href="/">
//       <HomeIcon style = {{fill: 'black', margin: '0 10px', fontSize: '55px'}}/> </a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/read">
//       <TableChartSharpIcon style = {{fill: 'black', margin: '0 10px', fontSize: '50px'}}/></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/create">
//        <AddIcon style = {{fill: 'black', margin: '0 10px', fontSize: '50px'}}/></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/setting">
//        <SettingsIcon style = {{fill: 'black', margin: '0 10px', fontSize: '50px'}}/></a>
//     </li>
//   </ul>
// </div>

//   </div>
//   );
// }
// export default Navbar;
