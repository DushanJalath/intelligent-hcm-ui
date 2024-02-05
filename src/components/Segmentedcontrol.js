import React, { useState } from 'react';
import '../styles/Segmentedcontrol.css';

const SegmentedControl = ({ categories }) => {
  const [selectedOption, setSelectedOption] = useState(categories[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="segmented-control">
      {categories.map((category) => (
        <button
          key={category}
          className={`segment ${selectedOption === category ? 'active' : ''}`}
          onClick={() => handleOptionChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;