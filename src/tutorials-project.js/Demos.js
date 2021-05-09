import React from 'react';
import { useState, useEffect } from 'react';

function Demos() {
  const [isError, setIsError] = useState(true);

  return (
    <>
      {isError && <Item />}
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        show/hide
      </button>
    </>
  );
}
const Item = () => {
  const changeWidth = () => {
    setSize(window.innerWidth);
  };
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  });
  return (
    <div>
      <h1>window width</h1>
      <h2>{size} px</h2>
    </div>
  );
};
export default Demos;
