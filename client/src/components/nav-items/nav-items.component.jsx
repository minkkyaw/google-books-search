import React from 'react';

import './nav-items.styles.scss';

const NavItems = ({ handleFunction, navItems, action, book, view}) => {
  return (
    <div className="book-button-groups">
      { navItems.map((navItem, i) => (
          <a
            key={i}
            className="book-btn"
            href={`${navItem.href}`}
            target={view ? "_blank" : ""}
            rel="noopener noreferrer"
          >
            {navItem.name}
          </a> 
        ))
        
      }
      {action === 'save' ? (
          <button data-book={book} onClick={handleFunction} className="book-save-btn book-btn">Save</button>
        ) : 
        action === 'delete' ? (<button data-book={book} onClick={handleFunction} className="book-save-btn book-btn">Delete</button>) : 
        null
      }       
      </div>
  )
}

export default NavItems;