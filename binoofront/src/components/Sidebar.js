import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubSidebar from './SubSidebar';
import { IconContext } from 'react-icons/lib';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<div className="sidebarContainer">
				<div className="wrapper">
					{SidebarData.map((item, index) => {
						return <SubSidebar item={item} key={index} />;
					})}
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Sidebar;
