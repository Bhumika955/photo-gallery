Photo Gallery Web App 

## Overview

This project is a **Photo Gallery Web Application built using React, Vite, and Tailwind CSS**.
The application fetches photos from the Picsum API and displays them in a responsive grid layout.
Users can search photos by author name and mark photos as favourites.

## Features

* Fetches **30 photos** from the Picsum Photos API
* Displays photos in a **responsive grid**
* **Real-time search** filter by author name
* Ability to **mark/unmark photos as favourites**
* **Favourites persist** using localStorage
* Loading and error states for API requests

## Technologies Used

* React (Functional Components)
* Vite
* Tailwind CSS
* JavaScript
* Picsum Photos API

## Project Structure

src/

* components/

  * Gallery.jsx
  * PhotoCard.jsx
* hooks/

  * useFetchPhotos.js
* reducer/

  * Reducer.js
* App.jsx


## Key Concepts Implemented

 : Custom Hook

   `useFetchPhotos` handles fetching photos from the API and manages loading and error states.

 : useReducer

  `useReducer` is used to manage the favourites state and handle toggle actions.

 : useMemo

   Used to optimize performance by computing filtered photos only when dependencies change.

 : useCallback

   Used to memoize the search handler function to avoid unnecessary re-renders.

 : localStorage

   Favourites are stored in localStorage so they persist after page refresh.


## API Used

Picsum Photos API
https://picsum.photos/v2/list?limit=30


## How to Run the Project

1. Clone the repository

git clone https://github.com/Bhumika955/photo-gallery.git

2. Navigate to the project folder

cd photo-gallery

3. Install dependencies

npm install

4. Run the development server

npm run dev

5. Open in browser

http://localhost:5173



