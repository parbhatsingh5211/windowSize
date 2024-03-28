import { useState, useEffect } from 'react';

function App() {

  const [width, setWidth]=useState(window.innerWidth);
  const [height, setHeight]=useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  return (
    <div className="App">
      <label>Window Size:  </label><br/>
      <span>Width: {width} Height: {height}</span>
    </div>
  );
}

export default App;
