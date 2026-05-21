import {FilmCard, type FilmCardProps} from './components/FilmCard.tsx'
import {useWatchlist} from "@/hooks/useWatchList.ts";

function App() {
    const initialFilms: FilmCardProps[] = [
        {
            key: "1",
            title: "Inception",
            year: 2010,
            genre: "Sci-fi",
            rating: 9,
            watched: true,
        },
        {
            key: "2",
            title: "The Matrix",
            year: 1999,
            genre: "Sci-fi",
            rating: 8,
            watched: false,
        },
        {
            key: "3",
            title: "Interstellar",
            year: 2014,
            genre: "Sci-fi",
            rating: 9,
            watched: true,
        },
    ];

    const { films, toggleWatched, markAllAsWatched }= useWatchlist(initialFilms)

    return (
        <>
            {films.map((film) => (
                <FilmCard
                    {...film}
                    onToggleWatched={toggleWatched}
                />
            ))}
             <p/>
            <button onClick={markAllAsWatched}>Označit vše jako zhlédnuté</button>
        </>
    )
}

export default App
