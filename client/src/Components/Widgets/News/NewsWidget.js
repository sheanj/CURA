import axios from 'axios'

export const getArticles = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=Dbuka7DsWXrqcr0VQqVgCPvMgW3d19cb`);
    let articles = response.data.results;
    return articles
}