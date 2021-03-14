import React, { useState } from 'react';
//import Accordion from "./components/Accordion";
// import Search from './components/search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: "what is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a facorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];
const Options = [
  { label: 'the color red', color: 'red' },
  { label: 'the Color Green', value: 'green' },
  { label: 'Shade of blue', value: 'blue' },
];
const App = () => {
  const [selected, setSelected] = useState(Options[0]);
  const [showdropdown, setShowdropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowdropdown(!showdropdown)}>Toggle</button>
      {showdropdown ? (
        <Dropdown
          options={Options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
export default App;
