import React from 'react'

const NewsItem =(props)=>{
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-4'>
        <div className="card">
       <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src={imgUrl ? imgUrl :"https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=900&t=st=1692265050~exp=1692265650~hmac=a9016f47cfc704518b5d09629026c81c773e3270f007aa48f17ac9afd522cace"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By { author? author :"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl}  target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }

export default NewsItem;
