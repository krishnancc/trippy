import { Component } from "react";
import "./DestinationStyles.css"
import Mountain1 from "../assets/mountain.jpg";
import Mountain2 from "../assets/mountain2.jpg";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>
                    {this.props.heading}
                </h2>
                <p>
                    {this.props.text}
                </p>
            </div>
            
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
            </div>
        </div>
        )
    }
}

export default DestinationData;