import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books/Page';
import Categories from './components/categories/Categories';
import Nav from './components/Nav';

const routes = [
  {
    path: '/',
    name: 'BOOKS',
    component: <Books />,
  },
  {
    path: '/categories',
    name: 'CATEGORIES',
    component: <Categories />,
  },
];

const App = () => (
  <Router>
    <Nav title="Bookstore CMS" routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => <Route path={path} exact key={path}>{component}</Route>)}
    </Switch>
  </Router>
);

export default App;
