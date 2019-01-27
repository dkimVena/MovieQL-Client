import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { HOME_PAGE } from '../queries';
import Movie from './Movie';
import Nav from './Nav';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <React.Fragment>
    <Nav />
    <Container>
      <Query query={HOME_PAGE}>
      {
        ({loading, data, error}) => {
          if(loading) return (
            <lds-roller><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></lds-roller>
          );
          if(error) return "Something happend";

          return data.movies.map(movie => (
            <Movie
              id={movie.id}
              key={movie.id}
              poster={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
            />
            ));
        }
      }
      </Query>
    </Container>
  </React.Fragment>
);

export default Home;
