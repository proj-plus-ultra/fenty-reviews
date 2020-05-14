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
            <div className="review-overview" style={{marginBottom: '2em'}}>
                <div style={{textAlign: 'center',  paddingTop: 75, fontSize: 26, fontStyle: 'normal', fontWeight: 'bold', paddingBottom: 20}}>REVIEWS</div>
                <h2 onClick={this.props.onClick} style={{textAlign: 'center', fontSize: 13, paddingBottom: 50}}>WRITE A REVIEW</h2>
                {/* <table style={{width: '100%', paddingTop: 40, paddingBottom: 30}}>
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
                </table> */}
                <div className="rev-overview-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {/* <div className="rev-overview-bar" style={{textAlign: 'left'}}> */}
                            <div className="rating-snapshot" style={{fontSize: 13, width: '100%', paddingLeft: 20}}>
                                <div id="head" style={{paddingBottom: 10}}>Rating Snapshot</div>
                                <p style={{paddingBottom: 20}}>Select a row below to filter reviews.</p>
                                <div style={{paddingLeft: 5, width: '50%'}}>
                                    <div style={{width: '100%', paddingBottom: 12}} onClick={() => this.props.filterBy(5)} >
                                        <span>5 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['5']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['5']}</span>
                                    </div>
                                    <div style={{width: '100%', paddingBottom: 12}} onClick={() => this.props.filterBy(4)} >
                                        <span>4 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['4']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['4']}</span>
                                    </div>
                                    <div style={{width: '100%', paddingBottom: 12}} onClick={() => this.props.filterBy(3)} >
                                        <span>3 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['3']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['3']}</span>
                                    </div>
                                    <div style={{width: '100%', paddingBottom: 12}} onClick={() => this.props.filterBy(2)} >
                                        <span>2 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['2']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['2']}</span>
                                    </div>
                                    <div style={{width: '100%', paddingBottom: 12}} onClick={() => this.props.filterBy(1)} >
                                        <span>1 ⭑ <Bar width={'80%'} rev={this.state.sortedRevs['1']} ttlRev={this.props.reviews.length} /> {this.state.sortedRevs['1']}</span>
                                    </div>
                                </div>
                            </div>
                        <div style={{width: '50%'}}>
                            <div className="avg-cust-rating" style={{fontSize: 13, width: '100%'}}>
                                <div style={{paddingBottom: '10px'}}>Average Customer Rating</div>
                                {/* <div className="avg-customer-ratings" style={{display: 'flex', flexDirection: 'column'}}>
                                    <div className="overall" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <span>Overall</span>
                                        <span><Star starDimension="18px" starSpacing="0px" name="rev-rating" starRatedColor="black" totalStars={5} rating={this.props.revSnapshot.avgRev} /> </span>
                                        <span style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgRev * 100) / 100).toFixed(1)}</span>
                                    </div>
                                    <div className="quality-of-product" style={{display: 'flex', flexDirection: 'row'}}>
                                        <span>Quality of Product</span>
                                        <span><Bar rev={this.props.revSnapshot.avgQual} ttlRev={5} width={'100%'}/></span>
                                        <span style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgQual * 100) / 100).toFixed(1)}</span>
                                    </div>
                                    <div className="value-of-product" style={{display: 'flex', flexDirection: 'row'}}>
                                        <span>Value of Product</span>
                                        <span><Bar rev={this.props.revSnapshot.avgVal} ttlRev={5} width={'100%'}/></span>
                                        <span style={{paddingLeft: '5px'}}> {(Math.round(this.props.revSnapshot.avgVal * 100) / 100).toFixed(1)}</span>
                                    </div>
                                </div> */}
                                <table className="avg-customer-ratings">
                                    <tbody style={{lineHeight: '20px'}}>
                                        <tr className="overall">
                                            <td>Overall</td>
                                            <td style={{paddingLeft: '10px'}}><Star starDimension="18px" starSpacing="0px" name="rev-rating" starRatedColor="black" totalStars={5} rating={this.props.revSnapshot.avgRev} /> </td>
                                            <td style={{paddingLeft: '40px'}}> {(Math.round(this.props.revSnapshot.avgRev * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                        <tr className="quality-of-product">
                                            <td>Quality of Product</td>
                                            <td style={{paddingLeft: '10px'}}><Bar rev={this.props.revSnapshot.avgQual} ttlRev={5} width={'100%'}/></td>
                                            <td style={{paddingLeft: '40px'}}> {(Math.round(this.props.revSnapshot.avgQual * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                        <tr className="value-of-product" >
                                            <td>Value of Product</td>
                                            <td style={{paddingLeft: '10px'}}><Bar rev={this.props.revSnapshot.avgVal} ttlRev={5} width={'100%'}/></td>
                                            <td style={{paddingLeft: '40px'}}> {(Math.round(this.props.revSnapshot.avgVal * 100) / 100).toFixed(1)}</td>
                                        </tr>
                                    </tbody>
                                </table>                               
                            </div>
                        </div>
                    {/* </div> */}
            </div>
        </div>
        ) 
    }
};

var Bar = (props) => {
    return (
        <span className="rating-container" style={{width: props.width, height: '10px', backgroundColor: '#ccc', boxShadow: 'inset 0 0 2px rgba(0,0,0,.25)', borderRadius: '2px',border: '1px', padding: '1px', display: 'inline-block', margin: '0 5px 0 5px'}}>
            <div className="inner-bar" style={{width: `${(props.rev/props.ttlRev)*100}%`, backgroundColor: 'black', height: '10px', borderRadius: '2px'}}> </div>
        </span>
    )
}


module.exports = Overview;
