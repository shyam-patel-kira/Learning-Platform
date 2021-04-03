import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='sidebar h-auto inline-block'>
      <ul className='sidebar-list list-none flex flex-col self-center text-center items-center justify-around'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='row_new box-border rounded-xl grid items-center border-green-customBorder border-2'
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
