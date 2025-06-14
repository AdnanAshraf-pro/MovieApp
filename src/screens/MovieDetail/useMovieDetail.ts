import { useEffect, useState } from 'react';
import movieInstance from '../../network/movieInstance';

function useMovieDetail(props) {
  const { movieId } = props;
  const [movieDetail, setmovieDetail] = useState({});
  const getMovieDetails = () => {
    const data = movieInstance.get(`/${movieId}`);
    console.log('data', data);
    setmovieDetail({});
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    getMovieDetails,
    movieDetail,
  };
}

export default useMovieDetail;
