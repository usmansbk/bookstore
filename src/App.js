import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

const routes = [
  {
    path: '/',
    name: 'Books',
    component: <Books />,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: <Categories />,
  },
];

const Nav = () => (
  <nav>
    <Link to="/">Bookstore</Link>
    <ul>
      {routes.map(({ name, path }) => <NavLink key={path} exact to={path}>{name}</NavLink>)}
    </ul>
  </nav>
);

const App = () => (
  <h1>Bookstore</h1>
);

export default App;
