'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import Link from 'next/link';
import { setSidebarOn } from '@/lib/Features/sidebarSlice';
import { getAllCategories } from '@/lib/Features/categorySlice';
import { getCartItemsCount, getCartTotal, getAllCarts } from '@/lib/Features/cartSlice';
import "./Navbar.scss";

const Navbar = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    const carts = useSelector(getAllCarts);
    const itemsCount = useSelector(getCartItemsCount);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts])

    return (
        <nav className='navbar'>
            <div className='navbar-cnt flex align-center'>
                <div className='brand-and-toggler flex align-center'>
                    <Link href="/" passHref legacyBehavior>
                        <a className='navbar-brand flex align-center'>
                            <span className='navbar-brand-ico'>
                            </span>
                            <button type="button" className='sidebar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
                                <FaBars />
                            </button>
                            <span className='navbar-brand-txt text-white mx-2'>
                                <span className='fw-7'>Hagi's</span>Shop
                            </span>
                        </a>
                    </Link>
                </div>
                <div className='navbar-collapse w-100'>
                    <div className='navbar-search bg-white'>
                        <div className='flex align-center'>
                            <input type="text" className='form-control fs-14' placeholder='Search your preferred items here' onChange={(e) => handleSearchTerm(e)} />
                            <Link href={'/search/${searchTerm'} className='text-white search-btn flex align-center justify-center'>
                                <BsSearch className="text-xl hover:text-hoverColor fs-20" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='navbar-cart flex align-center'>
                    <Link href="/Cart" passHref legacyBehavior>
                        <a className='cart-btn'>
                            <ImCart className="text-xl text-white fs-25" />
                            <div className='cart-items-value'> {itemsCount} </div>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
