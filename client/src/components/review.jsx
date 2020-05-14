import React from 'react';
import Star from 'react-star-ratings';

var Review = (props) => {
    return (
        <div id='review' style={{paddingTop: 10, paddingLeft: 5}}>
            {props.user ? (
                <div className="review" style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: 50}}> 
                    <div className="user-info" style={{width: '25%', paddingLeft: 10}}>
                        <div style={{fontSize: 13}}>
                            <div style={{fontWeight: 700, paddingBottom: 10}}>{props.user.username}</div>
                            <div style={{paddingBottom: 5}}>{props.user.location}</div>
                            <div>Reviews {props.user.reviews}</div>
                            <div>Votes {props.user.votes}</div>
                            <div style={{padding: '5px 0px 5px 0px'}}>What is your skin type? <span style={{fontWeight: 'bold'}}>{props.user.skin_type}</span></div>
                            <div style={{paddingBottom: 5}}>What is your skin tone? <span style={{fontWeight: 'bold'}}>{props.user.skin_tone}</span></div>
                            <div>Age <span style={{fontWeight: 'bold'}}>{props.user.age}</span></div>
                        </div>
                        
                    </div>
                    <div className="rev-body"style={{width: '50%'}}>
                        <div><Star starDimension="18px" starSpacing="0px" name="rev-rating" starRatedColor="black" totalStars={5} rating={props.review.rating} /> · <span style={{fontSize: 13}}>{props.review.date} month(s) ago</span></div>
                        <div className="rev-title" style={{fontWeight: 700, fontSize: 16, paddingTop: 5}}>{props.review.title}</div>
                        <div className='rev-body' style={{padding: '5px 0px 5px 0px', fontSize: 13}}>{props.review.body}</div>
                        <div style={{padding: '20px 0px 10px 0px', fontSize: 13}}><span style={{fontWeight:'bold'}}>✔ Yes, </span>I recommend this product. </div>
                        <div className='helpful-votes'>Helpful? <button onClick={()=> props.review.helpful_yes++}>Yes · {props.review.helpful_yes}</button><button>No · {props.review.helpful_no}</button><button>Report</button></div>
                    </div>
                    <div className="rev-overview" style={{width: '25%', paddingLeft: 20}} >
                        <div className="quality-rev" style={{fontSize: 13, paddingBottom: 10, fontWeight: 'bold'}}> Quality of Product
                            <div className="rating-container" style={{width: '80%', height: '10px', backgroungColor: 'gray', boxShadow: 'inset 0 0 2px rgba(0,0,0,.25)', borderRadius: '2px',border: '1px', padding: '1px', display: 'block', marginTop: 5}}>
                                <div className="inner-bar" style={{width: `${(props.review.quality/5)*100}%`, backgroundColor: 'black', height: '10px', borderRadius: '2px'}}> </div>
                            </div>
                        </div>
                        <div className="value-rev" style={{fontSize: 13, fontWeight: 'bold'}}> Value of Product
                            <div className="rating-container" style={{width: '80%', height: '10px', backgroungColor: 'gray', boxShadow: 'inset 0 0 2px rgba(0,0,0,.25)', borderRadius: '2px',border: '1px', padding: '1px', display: 'block', marginTop: 5}}>
                                <div className="inner-bar" style={{width: `${(props.review.value/5)*100}%`, backgroundColor: 'black', height: '10px', borderRadius: '2px'}}> </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div> LOADING ... </div>
            )}
        </div>
    )
};

module.exports = Review;