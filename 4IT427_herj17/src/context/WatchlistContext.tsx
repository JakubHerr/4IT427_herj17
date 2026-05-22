import { createContext, useState, useEffect } from "react";
import type { Film } from "@/types/film.types.ts";

interface WatchlistContextValue {
    films: Film[];
    addFilm: (film: Film) => void;
    removeFilm: (id: string) => void;
    toggleWatched: (id: string) => void;
    markAllAsWatched: () => void;
}

export const WatchlistContext = createContext<WatchlistContextValue | null>(null);

const initialFilms: Film[] = [
    {
        id: "1",
        title: "Inception",
        year: 2010,
        genre: "Sci-fi",
        rating: 9,
        watched: true,
    },
    {
        id: "2",
        title: "The Matrix",
        year: 1999,
        genre: "Sci-fi",
        rating: 8,
        watched: false,
    },
    {
        id: "3",
        title: "Interstellar",
        year: 2014,
        genre: "Sci-fi",
        rating: 9,
        watched: true,
    },
];

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
    const [films, setFilms] = useState<Film[]>(initialFilms);

    function addFilm(film: Film) {
        setFilms((prev) => [...prev, film]);
    }

    function removeFilm(id: string) {
        setFilms((prev) => prev.filter((f) => f.id !== id));
    }

    function toggleWatched(id: string) {
        setFilms((prev) =>
            prev.map((f) =>
                f.id === id ? { ...f, watched: !f.watched } : f
            )
        );
    }

    function markAllAsWatched() {
        setFilms((prev) => prev.map((f) => ({ ...f, watched: true })));
    }

    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    useEffect(() => {
        document.title = `Watchlist (${watchedCount} / ${totalCount} zhlédnuto)`;
    }, [watchedCount, totalCount]);

    return (
        <WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}>
            {children}
        </WatchlistContext.Provider>
    );
}
