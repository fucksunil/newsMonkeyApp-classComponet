import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://cdn.vox-cdn.com/thumbor/4LrtA_fy0TF6Xwp41YBPGX_LA_A=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19218416/acastro_190920_1777_amazon_0002.0.jpg" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
