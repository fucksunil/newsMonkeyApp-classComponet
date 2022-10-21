import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },

            "author": "ABC News",
            "title": "India's cricket bat supply threatened as Kashmiri farmers turn to plywood industry over willow",
            "description": "As the supply of willow trees dwindles, the faster-growing poplar tree is now being preferred by the booming plywood industry, and cricket bat makers are worried.",
            "url": "http://www.abc.net.au/news/2022-10-15/fewer-willows-worry-kashmir-cricket-bat-makers/101524484",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/c6ccf88f83925c49bba407ad2dd1ee10?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485",
            "publishedAt": "2022-10-14T22:30:52Z",
            "content": "Lines of shops display neat stacks of willow wood along a nondescript motorway in Indian-controlled Kashmir's Sangam village.\r\n<ul><li>Kashmir's cricket bat industry manufactures nearly 1 million bat… [+2424 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor() {
        super();
        console.log("hello i am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    componentDidMount(){
        console.log("cdm")
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
                            <NewsItem title={title.slice(0, 45)} description={description.slice(0, 88)} imageUrl={urlToImage} newsUrl={url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
