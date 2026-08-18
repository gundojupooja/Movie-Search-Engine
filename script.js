const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600"
    },
    {
        title: "Avengers",
        year: 2012,
        genre: "Action",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600"
    },
    {
        title: "Joker",
        year: 2019,
        genre: "Drama",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
    },
    {
        title: "Avatar",
        year: 2009,
        genre: "Fantasy",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600"
    }
];

const movieContainer = document.getElementById("movieContainer");

function displayMovies(list) {

    movieContainer.innerHTML = "";

    if (list.length === 0) {
        movieContainer.innerHTML =
            '<p class="message">No movies found 😢</p>';
        return;
    }

    list.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">

            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>📅 ${movie.year}</p>
                <p>🎭 ${movie.genre}</p>
                <button onclick="showMovie('${movie.title}')">
                    View Details
                </button>
            </div>
        `;

        movieContainer.appendChild(card);
    });
}

function searchMovies() {

    const search =
        document.getElementById("searchInput").value.toLowerCase();

    const results = movies.filter(movie =>
        movie.title.toLowerCase().includes(search) ||
        movie.genre.toLowerCase().includes(search)
    );

    displayMovies(results);
}

function showMovie(title) {

    const movie = movies.find(item => item.title === title);

    alert(
        `${movie.title}\n\n` +
        `Year: ${movie.year}\n` +
        `Genre: ${movie.genre}\n\n` +
        `Enjoy the movie! 🍿`
    );
}

displayMovies(movies);