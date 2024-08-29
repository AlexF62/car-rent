import React from 'react';
import './blog.scss';
import BlogItem from '../blogitem/BlogItem';

const Blog = () => {
    return (
        <section className='blog'>
            <div className='container'>
                <div className='blog__items'>
                    <BlogItem />
                    <BlogItem />
                </div>
            </div>
        </section>
    );
};

export default Blog;
