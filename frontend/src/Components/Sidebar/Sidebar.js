import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='font-myfonts my-6 w-1/6 h-full box-border border-customwhite'>
      <ul className='font-myfonts text-customwhite list-none flex flex-col bg-customdarkblue justify-center items-center'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='font-myfonts box-border rounded-md cursor-pointer p-2 w-1/2 text-center bg-custompink text-customblack hover:text-customdarkblue hover:bg-metal transition-all ease-in duration-300 border-customblack border-2 my-4 mx-4'
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
