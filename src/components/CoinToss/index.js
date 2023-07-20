// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component{
    state={
    headsCount:0,
    tailsCount:0,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/heads-img.png"
    }
    
    onClickTossCoinBtn=()=>{
        const {headsCount,tailsCount,imageUrl}=this.state
        const tossResult=Math.floor(Math.random()*2)
        let imgUrl=""
        let updatedHeadsCount=headsCount
        let updatedTailsCount=tailsCount
        if(tossResult===0){
            updatedHeadsCount+=1
            imgUrl="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        }
        else{
            updatedTailsCount+=1 
            imgUrl="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        }
        this.setState({
            headsCount:updatedHeadsCount,
            tailsCount:updatedTailsCount,
            imageUrl:imgUrl 
        })
    }

    render(){
        const {headsCount,tailsCount,imageUrl}=this.state
        const totalCount=headsCount+tailsCount
        return(
            <div className="bg-container">
            <div className="coin-toss-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="desc">Heads (or) Tails</p>
            <img src={imageUrl} alt="toss result" className="toss-image"/>
            <button type="button" className="toss-btn" onClick={this.onClickTossCoinBtn}>Toss Coin</button>
            <div className="output-row">
            <p className="total-count">Total: {totalCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
            </div>
            </div>
            </div>
        )
    }
}
export default CoinToss
