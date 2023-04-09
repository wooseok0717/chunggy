import React, {useEffect, useState} from 'react';

export default function NavBar () {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='nav-bar'>
        <div>Home</div>
        <div>Item Database</div>
        <div>Gear Simulator</div>
        <div>Stat Simulator</div>
    </div>
  );
}