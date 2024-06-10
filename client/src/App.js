import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import FavoriteButton from './components/FavoriteButton';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/books/:id" component={BookDetails} />
        {/* favoritbutton */}
        <Route path="/books/:id" component={FavoriteButton} />
      </Switch>
    </Router>
  );
};

export default App;