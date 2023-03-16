import { Link } from "react-router-dom"
import { FaStar, FaFileAlt } from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <div className="numbers">
          <p><FaFileAlt /> {movie.vote_count}</p>
          <p><FaStar /> {movie.vote_average}</p>
        </div>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard