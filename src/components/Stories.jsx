import React from 'react';

const Stories = () => {
  // Sample data for stories
  const storiesData = [
    { id: 1, title: 'Story 1', image: 'url_to_image_1' },
    { id: 2, title: 'Story 2', image: 'url_to_image_2' },
    { id: 3, title: 'Story 3', image: 'url_to_image_3' },
  ];

  return (
    <div className="stories-carousel">
      {storiesData.map(story => (
        <div key={story.id} className="story">
          <img src={story.image} alt={story.title} />
          <h3>{story.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Stories;