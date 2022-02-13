import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Box from '@mui/material/Box';
import ListaPost from '../post/pages/ListaPost';
import Menu from '../post/components/Menu';
import PageFavoritesPosts from '../post/pages/PageFavoritesPosts';
import AllPostList from  '../post/pages/AllPostList';
import PostSolo from "../post/pages/PostSolo";



const Routes = ({user}) => {

  return (
    <div>
      <Router>
        <Menu />

      <Box mt={2}>
      <Switch>
          <Route path="/posts">
            <ListaPost user={user} />
          </Route>
          <Route path="/favorites">
            <PageFavoritesPosts />
          </Route>
            <Route path="/post/:id">
              <PostSolo/>
            </Route>
          <Route path="/">
            <AllPostList user={user}  />
          </Route>
        </Switch>
      </Box>
      </Router>
    </div>

  );
};

export default Routes;
