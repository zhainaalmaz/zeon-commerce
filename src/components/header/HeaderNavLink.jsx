import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavLink = ({ linkName, linkPath, sendBreadCrumbsHandler }) => {
  return (
    <>
      <NavLink style={{ color: 'black' }} to={linkPath}>
        {linkName}
      </NavLink>
    </>
  );
};

export default HeaderNavLink;
