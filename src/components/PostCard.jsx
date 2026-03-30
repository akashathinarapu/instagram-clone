import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';  // Assume you have some CSS for styling

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.description}</p>
                <div className="post-interactions">
                    <span className="post-likes">{post.likes} Likes</span>
                    <span className="post-comments">{post.comments.length} Comments</span>
                </div>
                <div className="comments">
                    {post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <strong>{comment.user}:</strong> {comment.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default PostCard;