
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
}