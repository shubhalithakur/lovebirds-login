import { useState } from "react";

const accessKey = "SktVTEKWgA9i0X4XyGhXNbqqk1rZI-4kBac5KaLXymE";

export default function HomePage() {
    const [inputData, setInputData] = useState(""); // holds the user input
    const [images, setImages] = useState([]); // array to store the images fetched from Unsplash
    const [page, setPage] = useState(1); // to track the number of pages by default set as 1
    const [loading, setLoading] = useState(false); // track the images being fetched
    const [imageIds, setImageIds] = useState([]); // state to track image IDs

 // set page no. to 1, submission, reset, and call fetchImages
const handleSearch = async (event) => {
    event.preventDefault();// prevent the default form submission behavio
    setPage(1); // pagination set as 1 as default
    setImageIds([]); // reset image ids
    await fetchImages(); // it tells JavaScript to wait for an 
    // asynchronous action to finish before continuing the function
};

const fetchImages = async () => {
    setLoading(true); // indicates that data fetching has started
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`; // dynamic url
    const response = await fetch(url); // waits for the request to complete before moving to the next line.
    const data = await response.json(); // converts the HTTP response into a JavaScript object.
    const results = data.results; // extracts the array of images from the response.

    // Filter out already fetched images based on ID
    const newImages = results.filter((image) => !imageIds.includes(image.id));

    // Ensure that we always append to the latest state, avoiding overwrites
    if (page === 1) {
        setImages(newImages); // replacing the existing images in the state with new search results
    } else {
        setImages((prevImages) => [...prevImages, ...newImages]); // spread operator to keep previous images
    }

    // Update the image IDs state to include the new image IDs
    setImageIds((prevIds) => [...prevIds, ...newImages.map((image) => image.id)]);

    setLoading(false); // indicating that the API call is complete.
    setPage(page + 1); // Increments the page number for the next API request
};

    const handleShowMore = () => {
        fetchImages(); // calls to fetch the next page of images
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8">Image Search App</h1>

            <form onSubmit={handleSearch} className="flex justify-center mb-6">
                <input
                    type="text"
                    id="search-input"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Search for images"
                    className="w-3/4 sm:w-1/2 md:w-1/3 p-2 border rounded-md shadow-sm"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white p-2 ml-2 rounded-md hover:bg-green-700"
                >
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* map creates a new array from calling a function for every array element */}
                {images.map((image) => (
                    <div key={image.id} className="search-result">
                        <img
                            src={image.urls.small} // Uses the small-sized image from the API
                            alt={image.alt_description} // Alternative text for accessibility
                            className="w-full h-56 object-cover rounded-lg shadow-md"
                        />
                        <a
                            href={image.links.html} // Click opens the full image in a new tab
                            target="_blank" // Opens in a new browser tab.
                            rel="noopener noreferrer" // Security best practice for opening links in a new tab.
                            className="block mt-2 text-lg text-blue-600 hover:underline"
                        >
                            {/* If no title is available, it defaults to "Untitled Image" */}
                            {image.alt_description || "Untitled Image"}
                        </a>
                    </div>
                ))}
            </div>

            {/* Display a "Show More" button when there are images in the images array and the loading state is false.
                The button calls the handleShowMore function when clicked, which is likely used to load or display more images. */}
            {!loading && images.length > 0 && (
                <button
                    onClick={handleShowMore}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg mx-auto block"
                >
                    Show More
                </button>
            )}

            {/* When loading is true, the "Loading..." message is displayed. */}
            {loading && <div className="text-center text-xl">Loading...</div>}
        </div>
    );
}
