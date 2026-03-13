import { useState, useReducer, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import { Reducer, initialState } from "../reducer/Reducer";

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(Reducer, initialState);

  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
    const clearSearch = () => setSearch("");
  const filteredPhotos = useMemo(() => {

    return photos.filter(photo =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );

  }, [photos, search]);

  const toggleFav = (id) => {
    dispatch({ type: "TOGGLE_FAV", payload: id });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (

    <div className="p-6">
      <div className="relative mb-5 w-full max-w-md mx-auto">
      <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        {(search || isFocused) && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-1 shadow-md transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.length === 0 ? (

  <p className="text-center col-span-full text-gray-500">
    No photos found
  </p>

) : (

        filteredPhotos.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={state.favourites.includes(photo.id)}
            toggleFav={toggleFav}
          />
        ))
)}

      </div>
    
    </div>
  );
}