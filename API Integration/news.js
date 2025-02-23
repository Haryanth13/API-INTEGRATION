async function getNews() {
    const query = document.getElementById('query').value;
    const apiKey = 'd1af24449ab0686c080258cc79c561be'; // Replace with your GNews API key
    const url = `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}&lang=en`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log("API Response:", data); // Log response for debugging

        if (!data.articles) {
            throw new Error(data.message || "No news found");
        }

        const articles = data.articles.slice(0, 5).map(article => 
            `<p><strong>${article.title}</strong><br>${article.description}</p><hr>`
        ).join('');
        
        document.getElementById('news').innerHTML = articles || 'No news available';
    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        document.getElementById('news').innerHTML = `Error fetching news: ${error.message}`;
    }
}


