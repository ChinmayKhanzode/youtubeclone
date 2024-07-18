import React, { useState } from 'react';

const RefreshableComponent = ({User}) => {
  const [content, setContent] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const refreshContent = () => {
    setContent(`Refreshed Content at ${new Date().toLocaleTimeString()}`);
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={refreshContent}>Show and Refresh Content</button>
      {isVisible && (
        <div id="refreshableElement">
          {content} 
        </div>
      )}
    </div>
  );
};

export default RefreshableComponent;
