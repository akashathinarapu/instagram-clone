import React from 'react';

const Feed = () => {
    const posts = [
        { id: 1, content: "Post 1: Enjoying the sunny day!", user: "user1" },
        { id: 2, content: "Post 2: Exploring the mountains!", user: "user2" },
        { id: 3, content: "Post 3: Delicious food!", user: "user3" },
    ];

    return (
        <div className="feed">
            <h1>Instagram Feed</h1>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.user}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;