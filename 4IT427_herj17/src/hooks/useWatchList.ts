import { useEffect, useState } from "react";
import type {FilmCardProps} from "../components/FilmCard";

export function useWatchlist(initialFilms: FilmCardProps[]) {
    const [films, setFilms] = useState<FilmCardProps[]>(initialFilms);

    function toggleWatched(title: string) {
        setFilms((prev) =>
            prev.map((film) =>
                film.title === title
                    ? { ...film, watched: !film.watched }
                    : film
            )
        );
    }

    function markAllAsWatched() {
        setFilms((prev) =>
            prev.map((film) => ({ ...film, watched: true }))
        );
    }

    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    useEffect(() => {
        document.title = `Watchlist (${watchedCount} / ${totalCount} zhlédnuto)`;
    }, [watchedCount, totalCount]);

    return {
        films,
        toggleWatched,
        markAllAsWatched,
    };
}