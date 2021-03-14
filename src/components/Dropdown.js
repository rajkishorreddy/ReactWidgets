import React, { useState, useEffect, useRef } from 'react';
const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);
  const list = options.map((el) => {
    if (el.value === selected.value) return null;
    return (
      <div className="item" key={el.value} onClick={() => onSelectedChange(el)}>
        {el.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
