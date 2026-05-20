import { useState } from 'react'
import {FilmCard, type FilmCardProps} from './components/FilmCard.tsx'

function App() {
  const [count, setCount] = useState(0)

    const films: FilmCardProps[] = [
        {
            title: "Inception",
            year: 2010,
            genre: "Sci-fi",
            rating: 9,
            watched: true,
            onToggleWatched: (title: string) => {
                console.log(`${title} button clicked`);
            },
        },
        {
            title: "The Matrix",
            year: 1999,
            genre: "Sci-fi",
            rating: 8,
            watched: false,
            onToggleWatched: () => {},
        },
        {
            title: "Interstellar",
            year: 2014,
            genre: "Sci-fi",
            rating: 9,
            watched: true,
            onToggleWatched: () => {},
        },
    ];

  return (
    <>
        {films.map((film) => (
            <FilmCard key={film.title} {...film} />
        ))}
    </>
  )
}

export default App
