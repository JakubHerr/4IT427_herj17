export interface FilmCardProps {
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (title: string) => void;
}

export function FilmCard(props: FilmCardProps) {
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
        </>
    );
}