import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-6'>
           <span className='flex' onClick={() => setOpen(!open)}>
            {
            open ? 
            <X className='md:hidden'></X> : 
            <Menu className='md:hidden'></Menu>
            }
           
            <ul className={`md:hidden absolute duration-500 text-black 
                ${open ? 'top-8' : '-top-40'} 
                bg-amber-400`}>
                {links}
            </ul>
                <h3 className='ml-4'>My navbar</h3>
           </span>
           
            <ul className='md:flex hidden'>
                {
                   links 
                }
            </ul>

   


            {/* <ul className='flex '>
                <li className='mr-10'><a href=""></a>Home</li>
                <li className='mr-10'><a href=""></a>About</li>
                <li className='mr-10'><a href=""></a>Blog</li>
               
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;