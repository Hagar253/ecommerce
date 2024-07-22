'use client'

import React from 'react';
import Link from 'next/link';
import { formatPrice } from "../../utils/helpers";
import { useRouter } from 'next/navigation';
import "./Product.scss";

const Product = ({ product }) => {

    const router = useRouter();

    const handleProductClick = (id) => {
        router.push(`/product/${id}`)
    }


    return (
        <Link href={`/product/${product?.id}`} passHref legacyBehavior onClick={() => handleProductClick(product.id)}>
            <a className='product-item-link'>
                <div className='product-item bg-white'>
                    <div className='category'>{product?.category}</div>
                    <div className='product-item-img'>
                        <img className='img-cover' src={product?.images[0]} />
                    </div>
                    <div className='product-item-info fs-14'>
                        {/* <div className='brand'>
                            <span>Brand: </span>
                            <span className='fw-7'>{product?.brand}</span>
                        </div> */}
                        <div className='title py-2'>
                            {product?.title}
                        </div>
                        <div className='price flex align-center justify-center'>
                            <span className='old-price'>
                                {formatPrice(product?.price)}
                            </span>
                            <span className='new-price'>
                                {formatPrice(product?.discountedPrice)}
                            </span>
                            <span className='discount fw-6'>
                                ({product?.discountedPercentage}% Off)
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Product;
