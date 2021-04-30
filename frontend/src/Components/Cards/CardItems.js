import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
  return (
    <>
      <li className='cards__item bg-carditem'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img src={props.src} alt='' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text text-customdarkblue'>
              {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
