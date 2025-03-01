const apiKey = "98479f293e804a419d051259e5f39758"; // Replace with your real API key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${98479f293e804a419d051259e5f39758}`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status === 401) {
            console.error("Error: Invalid API Key");
            return;
        } else if (response.status === 429) {
            console.error("Error: Too many requests. Try again later.");
            return;
        } else if (response.status === 426) {
            console.error("Error 426: Upgrade Required - Ensure you're using HTTPS.");
            return;
        }

        if (data.articles) {
            displayNews(data.articles);
        } else {
            console.error("No news available.");
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();
