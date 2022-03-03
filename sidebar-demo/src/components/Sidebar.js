import React from 'react';
import { RiMenuLine, RiLayoutGridFill, RiChat4File, RiTeamFill, RiTaskFill, RiPieChart2Fill } from 'react-icons/ri';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='Sidebar'>

            <div className='sidebar-header'>
                <RiMenuLine className='sidebar-icon'/>
                <h1 className='sidebar-logo'>LOGO</h1>
            </div>
            <div className='sidebar-items'>
                <div className='item'>
                    <RiLayoutGridFill className='sidebar-icon'/>
                    <span className='sidebar-text'>Dashboard</span>
            </div>
            <div className='item'>
                <RiChat4File className='sidebar-icon'/>
                <span className='sidebar-text'>Chat</span>
            </div>
            <div className='item'>
                <RiTeamFill className='sidebar-icon'/>
                <span className='sidebar-text'>Teams</span>
            </div>
            <div className='item'>
                <RiTaskFill className='sidebar-icon' />
                <span className='sidebar-text'>Tasks</span>
            </div>
            <div className='item'>
                <RiPieChart2Fill className='sidebar-icon'/>
                <span className='sidebar-text'>Analutics</span>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;