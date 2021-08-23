import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ title, routes }) => (
  <nav>
    <Link to="/">{title}</Link>
    <ul>
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink exact to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
