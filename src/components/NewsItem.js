import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3 mx-2'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/10/20/1600x900/471e282e-4894-11ed-930e-2f50bd8faadf_1665404421910_1666278224483_1666278224483.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
