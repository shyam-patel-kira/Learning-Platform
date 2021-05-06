import React from 'react';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='font-myfonts my-6 w-1/6 h-full box-border border-customwhite'>
      <ul className='font-myfonts text-customwhite list-none flex flex-col bg-customgray justify-center items-center'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='flex flex-row items-center justify-between font-myfonts box-border rounded-md cursor-pointer p-2 w-3/4 text-center bg-customnewblue text-customwhite hover:text-customdarkblue hover:bg-customhoverblue transition-all ease-in duration-300 border-customblack border-1 my-4'
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <span className='my-2 ml-4 mr-2'>{val.icon}</span>
              <span className='my-2 text-left flex-grow'>{val.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
