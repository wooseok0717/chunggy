import React, {useEffect, useState} from 'react';

export default function NavBar ({setCurrentPage}) {

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
        <div onClick={() => setCurrentPage('home')}>Home</div>
        <div onClick={() => setCurrentPage('database')}>Item Database</div>
        <div>Gear Simulator</div>
        <div>Stat Simulator</div>
    </div>
  );
}