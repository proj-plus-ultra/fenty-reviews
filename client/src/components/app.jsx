import React from 'react';
import axios from 'axios';
import StarRating from 'react-star-ratings';
import ReviewSearch from './search.jsx';
import Overview from './overview.jsx';
import ReviewList from './reviewList.jsx';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            reviews: [],
            revSnapshot: {},
            sortedRevs: {},
            sorted: [],
            isSorted: 0
        }
        this.getRevs = this.getRevs.bind(this);
        this.writeRev = this.writeRev.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.unSort = this.unSort.bind(this);
    }
    componentDidMount(){
        this.getRevs();
        this.getUsers();
    }
    getRevs() {
        axios.get('/reviews')
            .then(result => {
                this.setState({
                    sorted: result.data
                })
            })
            .then(() => {
                this.setState({
                    reviews: this.state.sorted
                })
            })
            .then(() => {
                let ttlRating = 0;
                let ttlQual = 0;
                let ttlVal = 0;
                this.state.reviews.forEach((review) => {
                    ttlRating += review.rating;
                    ttlQual += review.quality;
                    ttlVal += review.value;
                })
                this.setState({
                    revSnapshot: {
                        avgRev: ttlRating/this.state.reviews.length,
                        avgQual: ttlQual/this.state.reviews.length,
                        avgVal: ttlVal/this.state.reviews.length,
                    }
                })
            })
            .catch(err => console.error(err))
    }
    getUsers(){
        axios.get('/reviews/users')
            .then(results => {
                this.setState({
                    users: results.data
                })
            })
            .catch(err => console.error(err));
    }
    writeRev() {
        console.log('do something')
    }
    filterBy(n) {
        var sorted = [];
        this.state.reviews.forEach((rev, index) => {
            if(rev.rating === n) {
                sorted.push(rev);
            }
        });
        this.setState({
            sorted: sorted,
            isSorted: n
        });   
    }
    unSort() {
        this.setState({
            sorted: this.state.reviews,
            isSorted: 0
        });
    }
    render() {
        return (
            <div className="reviews">
                <div className="review-snapshot" style={{borderTop: '3px solid black', margin: '-0.5em -1em'}}>
                    <div style={{margin: '5px 1em', padding: '5px 0px 10px 10px', fontSize: 13}}>
                        <StarRating starDimension="15px" starSpacing="0px" name="rev-rating" starRatedColor="black" totalStars={5} rating={this.state.revSnapshot.avgRev} />
                        <a style={{paddingLeft: 10, paddingRight: 10, borderRight: '1px solid #bbb'}} >{(Math.round(this.state.revSnapshot.avgRev * 100) / 100).toFixed(1)}</a>
                        <a style={{paddingLeft: 10}}>{this.state.reviews.length} Reviews</a>                        
                    </div>
                </div>
                <ReviewSearch />
                <Overview onClick={this.writeRev} filterBy={this.filterBy} reviews={this.state.reviews} revSnapshot={this.state.revSnapshot} />
                <ReviewList user={this.state.users} rev={this.state.sorted} isSorted={this.state.isSorted} unSort={this.unSort} />
             </div>
  
        )
    }
}