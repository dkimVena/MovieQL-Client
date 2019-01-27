import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      rating
      language
      genres
      medium_cover_image
      description_intro
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;