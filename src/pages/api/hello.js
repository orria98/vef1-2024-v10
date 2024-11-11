// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export const fetchMoviesByTitle = async (title) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}&s=${title}`);
  const data = await response.json();
  return data;
};

export const fetchMovieDetailsByID = async (imdbID) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}&i=${imdbID}&plot=full`
  );
  const data = await response.json();
  return data;
};

export const fetchDetailedMovieSearch = async (title, year, type, plot) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}&s=${title}&y=${year}&type=${type}&plot=${plot}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchMoviePoster = (imdbID) =>
  `${process.env.NEXT_PUBLIC_API_URL}&i=${imdbID}`;
