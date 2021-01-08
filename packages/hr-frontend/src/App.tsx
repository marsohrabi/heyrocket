import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

const App: React.FC = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>
      <Grid container item justify="center" >
        This is where introductory text will go.
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

    </Grid>

  );
}

export default App;
