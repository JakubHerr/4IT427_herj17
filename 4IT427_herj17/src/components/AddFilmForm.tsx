import {useState} from "react";
import {useWatchlist} from "@/hooks/useWatchList.ts";

export function AddFilmForm() {
    const { addFilm } = useWatchlist()

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    return (
        <form
            className="grid gap-4 rounded-2xl border border-border bg-surface p-6 shadow-lg"
            onSubmit={(e) => {
                e.preventDefault();

                addFilm({
                    id: crypto.randomUUID(),
                    title,
                    year: Number(year),
                    genre,
                    rating: Number(rating),
                    watched: false,
                })

                setTitle("")
                setYear("")
                setGenre("")
                setRating("")
            }}
        >
            <h2 className="text-xl font-bold text-gray-900">Přidat film</h2>

            <div className="grid gap-1.5">
                <label htmlFor="title" className="text-sm font-bold text-text-muted">
                    Název filmu
                </label>
                <input
                    id="title"
                    type="text"
                    required
                    placeholder="např. Forrest Gump"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <div className="grid gap-1.5">
                <label htmlFor="year" className="text-sm font-bold text-text-muted">
                    Rok
                </label>
                <input
                    id="year"
                    type="number"
                    required
                    placeholder="např. 1994"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <div className="grid gap-1.5">
                <label htmlFor="genre" className="text-sm font-bold text-text-muted">
                    Žánr
                </label>
                <input
                    id="genre"
                    type="text"
                    required
                    placeholder="např. Drama"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <div className="grid gap-1.5">
                <label htmlFor="rating" className="text-sm font-bold text-text-muted">
                    Hodnocení (1–10)
                </label>
                <input
                    id="rating"
                    type="number"
                    min="1"
                    max="10"
                    required
                    placeholder="např. 9"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <button
                type="submit"
                className="mt-1 cursor-pointer rounded-xl bg-primary px-5 py-3 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
                Přidat film
            </button>
        </form>
    )
}
