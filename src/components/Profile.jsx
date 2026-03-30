import React from 'react';
import './Profile.css';

const Profile = ({ user, posts }) => {
    return (
        <div className="profile">
            <div className="profile-header">
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
            </div>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <img src={post.imageUrl} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
