import React, { useState } from 'react';
import { RiMenuLine, RiLayoutGridFill, RiChat2Fill, RiTeamFill, RiTaskFill, RiPieChart2Fill } from 'react-icons/ri';
import './Sidebar.css';

function Sidebar() {

    const sidebarCollapsed = localStorage.getItem('sidebar-Collapsed');
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

    const handleToggler = () => {
        if(isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-Collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-Collapsed');
    };

    return (
        <div className={isExpanded ? 'Sidebar' : 'Sidebar collapsed'}>
            <div className='sidebar-header'>
                <RiMenuLine 
                    className='sidebar-icon'
                    onClick={handleToggler}
                />
                <h1 className='sidebar-logo'>LOGO</h1>
            </div>
        <div className='sidebar-items'>
            <div className='item'>
                <RiLayoutGridFill className='sidebar-icon'/>
                <span className='sidebar-text'>Dashboard</span>
            </div>
            <div className='item'>
                <RiChat2Fill className='sidebar-icon'/>
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
                <span className='sidebar-text'>Analitics</span>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;