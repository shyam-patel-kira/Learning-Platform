import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='my-6 w-1/6 h-full'>
      <ul className='text-white list-none flex flex-col bg-blue-navbar justify-center items-center'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='box-border rounded-md cursor-pointer p-2 w-1/2 text-center bg-green-400 text-black hover:text-white hover:bg-green-700 transition-all ease-in duration-300 border-black border-2 my-4 mx-4'
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {val.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
