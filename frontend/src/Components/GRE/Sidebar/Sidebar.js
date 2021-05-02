import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='my-6 w-1/6 h-full'>
      <ul className='text-customwhite list-none flex flex-col bg-customblue justify-center items-center'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='box-border rounded-md cursor-pointer p-2 w-1/2 text-center bg-boxColor text-customblack hover:text-customwhite hover:bg-custombrown transition-all ease-in duration-300 border-black border-0 my-4 mx-4'
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