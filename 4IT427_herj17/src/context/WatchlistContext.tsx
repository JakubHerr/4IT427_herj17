import { createContext, useState, useEffect } from "react";
import type { Film } from "@/types/film.types.ts";
import {useQuery} from "@tanstack/react-query";

interface WatchlistContextValue {
    films: Film[];
    addFilm: (film: Film) => void;
    removeFilm: (id: string) => void;
    toggleWatched: (id: string) => void;
    markAllAsWatched: () => void;
}

export const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
    const { data: initialFilms, isLoading, isError, error } = useQuery({
        queryKey: ['films'],
        queryFn: async () => fetch("/films.json").then(res => res.json() as Promise<Film[]>),
        staleTime: 60_000
    })

    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        if (initialFilms) {
            setFilms(initialFilms);
        }
    }, [initialFilms]);

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
