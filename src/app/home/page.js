"use client";
import { useState,useEffect } from "react";

const accessKey = "SktVTEKWgA9i0X4XyGhXNbqqk1rZI-4kBac5KaLXymE";

export default function HomePage() {
    const [inputData, setInputData] = useState("");// holds the user input
    const [images, setImages] = useState([]); // array to store the images fetched from Unsplash
    const [page, setPage] = useState(1);// to track the number of pages by default set as 1
    const [loading, setLoading] = useState(false);// track the images being fetched
    const [imageIds, setImageIds] = useState([]);// state to track image IDs


    useEffect(() => {
        fetch(`https://api.unsplash.com/photos?client_id=${accessKey}`)
            .then((response) => response.json())
            .then((data) => setImages(data));
    }, []);

   // set page no. to 1, submission, reset, and call fetchImages
    const handleSearch = async (event) => {
        event.preventDefault();// prevent the default form submission behavio
        setPage(1);// pagination set as 1 as default
        setImageIds([]);// reset image ids
        await fetchImages(); // it tells JavaScript to wait for an 
        // asynchronous action to finish before continuing the function
    };

    const fetchImages = async () => {
        setLoading(true);// indicates that data fetching has started
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`; // dynamic url
        const response = await fetch(url); // waits for the request to complete before moving to the next line.
        const data = await response.json(); // converts the HTTP response into a JavaScript object.
        const results = data.results; // extracts the array of images from the response.

        // Filter out already fetched images based on ID
        const newImages = results.filter((image) => !imageIds.includes(image.id));

        
        setImages((prevImages) => (page === 1 ? newImages : [...prevImages, ...newImages]));
        setImageIds((prevIds) => [...prevIds, ...newImages.map((image) => image.id)]);

        setLoading(false);
        setPage(page + 1);
    };

    return (
        <div className="container mx-auto px-4 py-10 bg-black">
            <h1 className="text-4xl font-bold text-center mb-8 text-fuchsia-950">Image Search App</h1>

            <form onSubmit={handleSearch} className="flex justify-center mb-6">
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Search for images"
                    className="w-3/4 sm:w-1/2 md:w-1/3 p-2 border rounded-md shadow-sm"
                />
                <button type="submit" className="bg-green-600 text-white p-2 ml-2 rounded-md hover:bg-green-700">
                    Search
                </button>
            </form>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-0 ">
                {images.map((image) => (
                    <div key={image.id} className="search-result">
                        <img src={image.urls.small} className="w-full h-40 rounded-lg object-cover shadow-md" />
                        <a href={image.links.html} target="_blank" rel="noopener noreferrer" className="block mt-2 text-lg text-blue-600 hover:underline">
                           
                        </a>
                    </div>
                ))}
            </div>

            {!loading && images.length > 0 && (
                <button onClick={fetchImages} className="bg-blue-600 text-white py-2 px-6 rounded-lg mx-auto block">
                    Show More
                </button>
            )}

            {loading && <div className="text-center text-xl">Loading...</div>}
        </div>
    );
}
