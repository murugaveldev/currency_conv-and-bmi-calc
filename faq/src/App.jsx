import React, { useState } from "react"


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-4 border rounded">
          <div className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={() => handleClick(index)}>
          
            <h2 className="text-lg">{item.title}</h2>

          </div>
          {activeIndex === index && (
            <div className="px-4 py-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};




const App = () => {
  const items = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App
