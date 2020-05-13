import React from 'react';
import Review from './review.jsx'


export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 8,
            sortedList: [],
            sortBy: 'Most Relevant',
            isSorted: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.sortRevs=this.sortRevs.bind(this);
        this.removeSort = this.removeSort.bind(this);
    }
    sortRevs(e) {
        if(e === 'date') {
            this.setState({
               sortedList: this.props.rev.sort((a, b) => a[e] - b[e]),
               sortBy: 'Most Recent'
            }, () => (
                <ReviewDisplay start={0} end={this.state.end} rev={this.state.sortedList} user={this.props.user} />
            ));
        } else if (e === 'helpful_yes') {
            this.setState({
               sortedList: this.props.rev.sort((a, b) => b[e] - a[e]),
               sortBy: 'Most Helpful'
            }, () => (
                <ReviewDisplay start={0} end={this.state.end} rev={this.state.sortedList} user={this.props.user} />
            ));
        } else {
            this.setState({
                sortBy: 'Most Relevant'
            }, () => (
                <ReviewDisplay start={0} end={this.state.end} rev={this.props.unSorted} user={this.props.user} />
            ));
        }
    }
    handleClick() {
        this.setState({
            start: this.state.start += 8,
            end: this.state.end += 8
        }, () => (
            <ReviewDisplay start={0} end={this.state.end} rev={this.props.rev} user={this.props.user} />
        ));
    }
    removeSort() {
        this.setState({
            isSorted: 0
        }, () => (
            this.props.unSort()
        ));
    }
    render() {
        return (
            <div className="review-list" >
                <div className="rev-list-top-bar" style={{fontSize: 13, paddingBottom: 30}}>
        <div style={{padding: '20px 0px 20px 10px'}}> {this.props.rev.length < 8 ? (<span>Displaying 0-{this.props.rev.length} of {this.props.rev.length}</span>) : (<span>Displaying 0-{this.state.end} of {this.props.rev.length}</span>)}
                        <span className="rev-dropDown" style={{float: 'right', position: 'relative', display: 'inline-block', paddingRight: 20}}>
                            <div className="sort-by" style={{backgroundColor: 'white', border: 'none'}}>Sort by: {this.state.sortBy}  ▼ </div>
                            <div className="rev-dropdown-content" style={{position: 'absolute', zIndex: 1, width: '100%'}}>
                                <div value='relevant' onClick={() => this.sortRevs('relevant')}>Most Relevant</div>
                                <div value='helpful_yes' onClick={() => this.sortRevs('helpful_yes')}>Most Helpful</div>
                                <div value='date' onClick={() => this.sortRevs('date')}>Most Recent</div>
                            </div>
                        </span>
                    </div>
                </div>
                {this.props.isSorted > 0 ? (
                    <div className="rev-active-filters" style={{alignText: 'left', paddingLeft: 10, paddingBottom: 20}}>
                        <div style={{fontSize: 13}}>Active Filters</div>
                        <button onClick={() => this.removeSort()} style={{border: 'none', fontWeight: 'bold', padding: '5px 5px 5px 5px'}}>{this.props.isSorted} STARS ✘</button>
                    </div>
                ) : (
                    <div></div>
                )}
                <ReviewDisplay start={0} end={this.state.end} rev={this.props.rev} user={this.props.user} />
                {this.props.rev.length < 8 ? (<div></div>) : (<button className="rev-load-more-btn" style={{textAlign: 'center', width: '33%', marginLeft: '33%', marginRight: '33%', padding: '5px 14px', fontSize: '14px', backgroundColor: '#ededed', boxShadow: 'none', fontWeight: 700, border: 'none', marginBottom: '2em'}} onClick={this.handleClick}>LOAD MORE</button>)}
                <span className='rev-bottom-bg' style={{margin: '1e 1em'}}></span>
             </div>
        )
    }
}
var ReviewDisplay = (props) => {
    return (
        <div id="review-display">
            {props.rev.slice(props.start, props.end).map((review, index) => {
                return (
                    <Review user={props.user[review.id]} review={review} key={index} />
                )
            })}
      </div>
    )
}

module.exports = ReviewList;