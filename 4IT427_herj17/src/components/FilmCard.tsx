import type {Film} from "@/types/film.types.ts";
import {useWatchlist} from "@/hooks/useWatchList.ts";

export function FilmCard(props: Film) {
    const { removeFilm } = useWatchlist();

    const isRatingValid = props.rating >= 1 && props.rating <= 10;

    return (
        <article
            className={`flex min-h-[210px] flex-col justify-between gap-4 rounded-2xl border bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary ${
                props.watched
                    ? "border-success/60 bg-gradient-to-br from-green-50 to-emerald-50"
                    : "border-border"
            }`}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-bold leading-tight text-gray-900">
                        {props.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                        {props.year} &bull; {props.genre}
                    </p>
                </div>

                {props.watched && (
                    <span className="shrink-0 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                        &#10003; Zhlédnuto
                    </span>
                )}
            </div>

            {/* Rating */}
            <p className="text-base font-bold">
                &#11088; {isRatingValid ? props.rating : "Neplatné hodnocení"}/10
            </p>

            {/* Actions */}
            <div className="flex gap-2">
                <button
                    onClick={() => props.onToggleWatched(props.id)}
                    className="flex-1 cursor-pointer rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-hover hover:-translate-y-0.5"
                >
                    Změnit stav
                </button>
                <button
                    onClick={() => removeFilm(props.id)}
                    className="flex-1 cursor-pointer rounded-xl border border-danger/40 bg-transparent px-4 py-2.5 text-sm font-bold text-danger transition hover:bg-danger/5 hover:-translate-y-0.5"
                >
                    Odebrat
                </button>
            </div>
        </article>
    );
}
