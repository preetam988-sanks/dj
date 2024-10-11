import React from 'react'
import{NavLink, Link} from 'react-router-dom'

const BlogCard = () => {
    return (

            <div className="blog-card">
                <div className="card-image">
                    <img src="/images/blog-1.jpg" alt="blog" className="img-fluid w-100"/>
                </div>
                <div className="blog-content">
                    <p className="date">24 Sep,2024</p>
                    <h5 className="Tittle">
                        A beautifull Suday Morning Renaissance
                    </h5>
                    <p className="description">
                        You are only As good as Your Last Collection
                    </p>
                    <Link className="button" to="/Blog/:id">
                        Read More
                    </Link>
                </div>
            </div>
    )
}
export default BlogCard
