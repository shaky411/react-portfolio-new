import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

// eslint-disable-next-line
export default props => {
  return (
    <Menu width={300}>
        <a className="menu-item" href="/react-portfolio-new/"><i class="fa-solid fa-house-chimney mr-4"></i>
        Home
      </a>
      <a className="menu-item" href="/react-portfolio-new/about"><i class="fa-solid fa-circle-info mr-4"></i>
        About
      </a>
      <a className="menu-item" href="/react-portfolio-new/projects"><i class="fa-solid fa-list-check mr-4"></i>
        Projects
      </a>
      <a className="menu-item" href="/react-portfolio-new/gallery"><i class="fa-regular fa-image mr-4"></i>
        Gallery
      </a>
      <a className="menu-item" href="/react-portfolio-new/contact"><i class="fa-regular fa-address-book mr-4"></i>
        Contact
      </a>
    </Menu>
  );
};