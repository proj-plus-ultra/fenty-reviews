import React from 'react';
import axios from 'axios';

export default class ReviewSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        //FIXME: search component doesnt actually work
        return (
            <div className="reviewSearchContainer" style={{borderTop: '1px solid #bbb', borderBottom: '1px solid #bbb'}}>
                <form name='revSearch' style={{padding: '0px 0px 0px 10px'}}>
                    <input type="text" placeholder=' Search topics and reviews' style={{fontWeight: 400, width: '40%', fontSize: 14, padding: '0.5em 1em', margin: '10px 0', border: 'none', border: 'solid 1px #bbb', borderRadius: 2}} />
                    <button type="submit" style={{fontSize: 24}}></button>
                </form>
            </div>  
        )
    }
}