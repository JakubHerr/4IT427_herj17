import type {Film} from "@/types/film.types.ts";
import {useWatchlist} from "@/hooks/useWatchList.ts";

export function FilmCard(props: Film) {
    const { removeFilm } = useWatchlist();

    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <p>{props.genre}</p>
            <p>{props.rating}</p>
            <p>{props.watched}</p>
            { props.watched && <p>✓ Zhlédnuto</p> }
            <button onClick={() => props.onToggleWatched(props.title)}>
                Změnit stav zhlédnutí
            </button>
            <button onClick={() => removeFilm(props.id)}>
                Odstranit film
            </button>
        </>
    );
}