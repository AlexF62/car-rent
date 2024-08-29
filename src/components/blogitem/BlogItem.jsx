/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import blogImagesTwo from '../../images/blog/blog-2.jpg';

const BlogItem = () => {
    return (
        <div className='blog__item'>
            <img src={blogImagesTwo} alt='' className='blog__item-img' />
            <h4 className='blog__item-title'>
                A Guide to Road-Tripping With Pets
            </h4>
            <a href='#' className='blog__item-link'>
                more
            </a>
        </div>
    );
};

export default BlogItem;
