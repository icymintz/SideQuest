
import { useState } from "react";
import type { FormEvent } from "react";

function Hero() {
    const [city, setCity] = useState("");
    const [searchedCity, setSearchedCity] = useState("");

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const cleanCity = city.trim();

        if (!cleanCity) {
            return;
        }

        setSearchedCity(cleanCity);
    }

    return (
        <section className="hero">
            <h1>Go somewhere new.</h1>

            <p className="hero-description">
                Discover hidden gems, local favorites, and unforgettable
                experiences all over the world.
            </p>

            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search a city..."
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />

                <button type="submit">Search</button>
            </form>

            {searchedCity && (
                <div className="search-results">
                    <h2>Explore {searchedCity}</h2>
                    <p>
                        Discover hidden gems, activities, and local
                        favorites in {searchedCity}.
                    </p>
                </div>
            )}
        </section>
    );
}

export default Hero;
