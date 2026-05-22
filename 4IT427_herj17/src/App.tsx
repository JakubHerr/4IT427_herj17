import { AddFilmPage } from "@/pages/AddFilmPage.tsx";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import {WatchlistPage} from "@/pages/WatchlistPage.tsx";

function App() {
    return (
        <>
            <nav className="mx-auto max-w-5xl px-4 sm:px-6 mt-6 mb-2">
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-2 py-2 shadow-sm">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                isActive
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-text-muted hover:bg-surface-muted hover:-translate-y-0.5'
                            }`
                        }
                    >
                        Můj watchlist
                    </NavLink>
                    <NavLink
                        to="/form"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                isActive
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-text-muted hover:bg-surface-muted hover:-translate-y-0.5'
                            }`
                        }
                    >
                        Přidat film
                    </NavLink>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<WatchlistPage/>} />
                <Route path="/form" element={<AddFilmPage/>} />
                <Route path="*" element={<WatchlistPage/>} />
            </Routes>
        </>
    )
}

export default App
