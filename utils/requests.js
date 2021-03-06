const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "51de63fa8a1f4d07c7cde869fc583239";

const requests = {
    trending: `/trending/movie/week?api_key=${API_KEY}`,
    netflixoriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    toprated: `/movie/top_rated?api_key=${API_KEY}`,
    action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    movieDetails: (id, credits) => {
        const creditsParameter = credits ? "/credits" : "";
        return `/movie/${id}${credits}?api_key=${API_KEY}`;
    },
    recommended: `/movie/566525/recommendations?api_key=${API_KEY}&language=en-US&page=1
`,
};

module.exports = { axiosInstance, requests };


