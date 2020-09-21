import axios from 'axios'

export const getArticles = async () => {
    let key = process.env.REACT_APP_NEWS_WIDGET_API_TOKEN;
    console.log(process.env.REACT_APP_NEWS_WIDGET_API_TOKEN)
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`);
    let articles = response.data.results;
    return articles
}