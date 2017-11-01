import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.css';
//import registerServiceWorker from './registerServiceWorker';

const AddExpensePage = () => (
  <div>
    <p>Hello! Add page here.</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>Hello! Edit page here here.</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>Hello! Help page here.</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    404 -
    <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h3>Expensify |
      <Link to="/">Home</Link> |
      <Link to="/create">Create</Link> |
      <Link to="/edit">Edit</Link> |
      <Link to="/help">Help</Link>
    </h3>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
//registerServiceWorker();
