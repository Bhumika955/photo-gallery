export default function PhotoCard({ photo, isFav, toggleFav }) {

  return (
    <div className="border rounded-lg p-3 shadow-md transform hover:scale-105 hover:shadow-xl transition duration-200">
      <img
        src={photo.download_url}
        alt={photo.author}
       className="w-full h-60 object-cover rounded-md"
      />

      <div className="flex justify-between mt-2">

        <p>{photo.author}</p>

        <button onClick={() => toggleFav(photo.id)}>
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}