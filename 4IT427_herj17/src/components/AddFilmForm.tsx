import {useState} from "react";
import {useWatchlist} from "@/hooks/useWatchList.ts";

export function AddFilmForm() {
    const { addFilm } = useWatchlist()

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    return (
        <>
            <form>
                <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type={"text"} value={year} onChange={(e) => setYear(e.target.value)}/>
                <input type={"text"} value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <input type={"text"} value={rating} onChange={(e) => setRating(e.target.value)}/>
                {/*    TODO Add film*/}
            </form>
        </>
    )
}