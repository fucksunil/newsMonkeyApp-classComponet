import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("hello i am a constructor from news component")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2609c34a178e4d2ea7d1fbe18429e91a";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles: parseData.articles})

    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        let {title, description, url, urlToImage} = element;
                        return <div className='col-md-4' key={url} >
                            <NewsItem title={title?title.slice(0, 45):""} description={description?description.slice(0, 88):""} imageUrl={urlToImage} newsUrl={url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
