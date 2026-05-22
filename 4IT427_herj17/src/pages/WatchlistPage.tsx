import {FilmCard} from "@/components/FilmCard.tsx";
import {useWatchlist} from "@/hooks/useWatchList.ts";
import {ThemeToggle} from "@/components/ThemeToggle.tsx";

export function WatchlistPage() {
    const { films, isLoading, isError, error, markAllAsWatched, toggleWatched } = useWatchlist()

    if (isLoading) return <p className="text-center text-text-muted py-16">Načítání filmů...</p>
    if (isError) return <p className="text-center text-danger py-16">Chyba: {error?.message}</p>

    const watchedCount = films.filter((f) => f.watched).length;
    const totalCount = films.length;

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero */}
            <section className="mb-8 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-blue-200">
                        Film Watchlist
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Můj filmový watchlist
                    </h1>
                    <p className="mt-2 text-blue-100">
                        Spravuj svůj seznam filmů ke zhlédnutí.
                    </p>
                </div>

                <div className="flex gap-3">
                    <ThemeToggle />
                    <button
                        onClick={markAllAsWatched}
                        className="shrink-0 cursor-pointer rounded-xl bg-white/20 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/30"
                    >
                        Označit vše jako zhlédnuté
                    </button>
                </div>
            </section>

            {/* Stats */}
            <section className="mb-8 flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3 shadow-sm">
                <span className="text-2xl font-extrabold text-success">
                    {watchedCount} / {totalCount}
                </span>
                <span className="text-sm text-text-muted">zhlédnuto</span>
            </section>

            {/* Film grid */}
            {films.length === 0 ? (
                <div className="rounded-xl border-2 border-dashed border-border py-16 text-center text-text-muted">
                    Ve watchlistu zatím nejsou žádné filmy.
                </div>
            ) : (
                <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {films.map((film) => (
                        <FilmCard
                            key={film.id}
                            {...film}
                            onToggleWatched={toggleWatched}
                        />
                    ))}
                </section>
            )}
        </main>
    )
}