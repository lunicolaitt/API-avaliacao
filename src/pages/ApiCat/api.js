// api.js
export async function fetchCatImages(page = 1, limit = 9) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch cat images');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching cat images:', error);
        throw error;
    }
}
