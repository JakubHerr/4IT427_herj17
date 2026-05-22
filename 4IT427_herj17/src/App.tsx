import { FilmCard } from './components/FilmCard.tsx'
import { AddFilmForm } from "@/components/AddFilmForm.tsx";
import {useWatchlist} from "@/hooks/useWatchList.ts";

function App() {
    const { films, toggleWatched, markAllAsWatched } = useWatchlist();

    return (
        <>
            {films.map((film) => (
                <FilmCard
                    key={film.id}
                    {...film}
                    onToggleWatched={toggleWatched}
                />
            ))}
            <p/>
            <button onClick={markAllAsWatched}>Označit vše jako zhlédnuté</button>
            <p/>
            <AddFilmForm/>
        </>
    )
}

export default App
