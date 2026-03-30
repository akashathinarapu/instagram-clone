import React from 'react';
import Feed from '../components/Feed';
import Stories from '../components/Stories';
import Upload from '../components/Upload';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Instagram Clone</h1>
            <Stories />
            <Upload />
            <Feed />
        </div>
    );
};

export default Home;