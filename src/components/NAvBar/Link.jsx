import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-x lg:mr-10 hover:bg-amber-600'>
            <a href={route}>{route.name}</a>
        </li>
    );
};

export default Link;