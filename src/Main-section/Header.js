import React, { useState, useEffect } from 'react';

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(document.querySelector('header').offsetHeight);

    const handleScroll = () => {
      let scroll = window.scrollY;
      const header = document.querySelector('header');

      // Изменяем цвет шапки по мере прокрутки
      header.style.backgroundColor = `rgba(23, 28, 40, ${scroll / (headerHeight * 2.5)})`;

      // Если прокрутка больше двойной высоты шапки, устанавливаем другой цвет
      if (scroll >= headerHeight * 2) {
        header.style.backgroundColor = '#171c28';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  return (
    <header>
      <div className="logo-container">
        <img src="./images/logo.png" alt="Your Logo" />
      </div>
      <nav className="nav-links">
      <a href="#">О нас</a>
            <a href="#">Меню</a>
            <a href="#">Акции</a>
            <a href="#">Фотоотчёты</a>
            <a href="#">Контакты</a>
            <a href="workers.html">Персонал</a>
      </nav>
      <div className="mobile-menu">
        {/* Add your mobile menu content here */}
      </div>
    </header>
  );
};

export default Header;
