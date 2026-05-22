import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark");
        }
        return false;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    // Restore theme from localStorage on first load
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            setDark(true);
        } else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDark(true);
        }
    }, []);

    return (
        <button
            onClick={() => setDark((d) => !d)}
            className="cursor-pointer rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-bold text-text-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            aria-label={dark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
        >
            {dark ? "\u2600\uFE0F Světlý režim" : "\uD83C\uDF19 Tmavý režim"}
        </button>
    );
}
