import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchMovieDetailsByID } from "./api/hello";
import styles from "@/styles/Movie.module.css";

const MoviePage = () => {
  const router = useRouter();
  const { imdbID } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (imdbID) {
      fetchMovieDetailsByID(imdbID).then((data) => setMovie(data));
    } else {
      setMovie(null);
    }
  }, [imdbID]);

  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.moviePage}>
      <h1>Movie details</h1>
      {movie ? (
        <div className={styles.movieDetails}>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={200}
            height={300}
          />
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
      <button onClick={handleOnClick} className={styles.backButton}>
        Back to search
      </button>
    </div>
  );
};

export default MoviePage;
