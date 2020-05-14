import React from 'react';
import Star from 'react-star-ratings';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedRevs: {}
        }
        this.sortRevs = this.sortRevs.bind(this);
    }
    componentWillReceiveProps() {
        this.sortRevs()
    }
    sortRevs() {
        let sorted = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };
        this.props.reviews.forEach((review) => {
            sorted[review.rating]++;
        })
        this.setState({
            sortedRevs: sorted
        })
    }
    render () {
        return (
            <div className="review-overview" /*style={{marginTop: '-1.1em',  marginRight: '-1em'}}*/>
                <h1 style={{textAlign: 'center',  paddingTop: 75, fontSize: 26, fontStyle: 'normal', fontWeight: 900}}>REVIEWS</h1>
                <h2 onClick={this.props.onClick} style={{textAlign: 'center', fontSize: 13}}>WRITE A REVIEW</h2>
                <table style={{width: '100%', paddingTop: 40, paddingBottom: 30}}>
                    <tbody>
                    <tr style={{textAlign: 'left'}}>
                        <td style={{paddingLeft: 20}}>
                            <div className="rating-snapshot" style={{fontSize: 13}}>
                                <div id="head">Rating Snapshot</div>
                                <p>Select a row below to filter reviews.</p>
                                <table style={{paddingLeft: 5, width: '50%'}}>
                                    <tbody>
                                        <tr style={{width: '100%'}} onClick={() => this.props.filterBy(5)} >
                                            <td>5 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['5']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['5']}</td>
                                        </tr>
                                        <tr onClick={() => this.props.filterBy(4)} >
                                            <td>4 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['4']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['4']}</td>
                                        </tr>
                                        <tr onClick={() => this.props.filterBy(3)} >
                                            <td>3 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['3']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['3']}</td>
                                        </tr>
                                        <tr onClick={() => this.props.filterBy(2)} >
                                            <td>2 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['2']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['2']}</td>
                                        </tr>
                                        <tr onClick={() => this.props.filterBy(1)} >
                                            <td>1 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['1']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['1']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td style={{width: '50%'}}>
                            <div className="avg-cust-rating" style={{fontSize: 13}}>
                                <div style={{paddingBottom: '10px'}}>Average Customer Rating</div>
                                <table className="avg-customer-ratings">
                                    <tbody>
                                        <tr className="overall">
                                            <td>Overall</td>
                                            <td><Star starDimension="18px" starSpacing="0px" name="rev-rating" starRatedColor="black" totalStars={5} rating={this.props.revSnapshot.avgRev} /> </td>
                                            <td style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgRev * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                        <tr className="quality-of-product">
                                            <td>Quality of Product</td>
                                            <td><Bar rev={this.props.revSnapshot.avgQual} ttlRev={5} width={'100%'}/></td>
                                            <td style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgQual * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                        <tr className="value-of-product" >
                                            <td>Value of Product</td>
                                            <td><Bar rev={this.props.revSnapshot.avgVal} ttlRev={5} width={'100%'}/></td>
                                            <td style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgVal * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
        </div>
        ) 
    }
};

var Bar = (props) => {
    return (
        <span className="rating-container" style={{width: props.width, height: '10px', backgroundColor: '#ccc', boxShadow: 'inset 0 0 2px rgba(0,0,0,.25)', borderRadius: '2px',border: '1px', padding: '1px', display: 'inline-block'}}>
            <div className="inner-bar" style={{width: `${(props.rev/props.ttlRev)*100}%`, backgroundColor: 'black', height: '10px', borderRadius: '2px'}}> </div>
        </span>
    )
}


module.exports = Overview;
