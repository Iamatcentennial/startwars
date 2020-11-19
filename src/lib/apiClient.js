export const fetchPeoples = async () => {
  let response = await fetch("https://swapi.dev/api/people/");
  let data = await response.json();
  return data;
};

export const fetchMovieDetails = async movieUrl => {
  let response = await fetch(movieUrl);
  let data = await response.json();
  return data;
};

const apiClient = {
  fetchPeoples,
  fetchMovieDetails
};

export default apiClient;
