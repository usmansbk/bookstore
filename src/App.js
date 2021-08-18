import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/books/Page';
import Categories from './components/categories/Categories';
import Nav from './components/Nav';
import store from './redux/configureStore';

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
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Nav title="Bookstore CMS" routes={routes} />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact key={path}>{component}</Route>
        ))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
