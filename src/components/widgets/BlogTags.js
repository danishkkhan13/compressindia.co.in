import React from 'react';
import Link from 'next/link';

const BlogTags = () => {
    return (
        <>
            <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.5s">
                <h3 className="sidebar__title">Tags</h3>
                <div className="sidebar__tags-list">
                    <Link href="/">Cleaner</Link>
                    <Link href="/">Office Cleaning</Link>
                    <Link href="/">Safety</Link>
                    <Link href="/">Floor Cleaning</Link>
                    <Link href="/">Covid19</Link>
                    <Link href="/">Kitchen Cleaning</Link>
                    <Link href="/">House Cleaning</Link>
                </div>
            </div>
        </>
    )
}

export default BlogTags;