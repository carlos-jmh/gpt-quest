from schemas.movies import MovieSchema


class MovieService:

    def get_movie(self, movie_id) -> MovieSchema:
        """Get movie by ID."""

        movie_list = [
            {
                "title": "Hunger Games 3",
                "released": 1876,
                "rating": 6.7
            },
            {
                "title": "Hunger Games 10",
                "released": 2010,
                "rating": 9.8
            },
        ]

        return MovieSchema(**movie_list[movie_id])