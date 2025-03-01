const apiKey = "98479f293e804a419d051259e5f39758"; // Replace with your actual API key
const newsContainer = document.getElementById("news-container");

// Fetch news from NewsAPI
async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.articles) {
            displayNews(data.articles);
        } else {
            newsContainer.innerHTML = "<p>No news available</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news. Check console for details.</p>";
    }
}

// Function to display news
function displayNews(articles) {
    newsContainer.innerHTML = ""; // Clear previous news
    articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || "No description available"}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Call the function to load news
fetchNews();

