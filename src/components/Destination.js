import Mountain1 from "../assets/mountain.jpg";
import Mountain2 from "../assets/mountain2.jpg";
import Mountain3 from "../assets/mountain3.jpg";
import Mountain4 from "../assets/mountain4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";


const Destination =()=>{
    return (
        <div className="destination">
            <h1>
                Popular Destinations
            </h1>
            <p>
                Tours give you the opportunity to see a lot, with a time frame
            </p>
            <DestinationData
            className="first-des" 
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon,
            Luzon is the country's (and 15th in the world's) 
            largest island, roughly divided into four sections: 
            Northern Luzon, Central Luzon, Southern Luzon, 
            and the National Capital Region. 
            These regions are accessible from Manila City by flights, 
            and land vehicles like buses and 
            private guided Luzon tours with transfers."
            img1={Mountain1}
            img2={Mountain2}
            />   

            <DestinationData
            className="first-des-reverse" 
            heading="Mt.Daguldul,Batangas"
            text="One of the most iconic views in Luzon,
            Luzon is the country's (and 15th in the world's) 
            largest island, roughly divided into four sections: 
            Northern Luzon, Central Luzon, Southern Luzon, 
            and the National Capital Region. 
            These regions are accessible from Manila City by flights, 
            and land vehicles like buses and 
            private guided Luzon tours with transfers."
            img1={Mountain3}
            img2={Mountain4}
            />   
        </div>
    )
}

export default Destination;