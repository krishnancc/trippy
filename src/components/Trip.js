import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/card1.jpg";
import Trip2 from "../assets/card2.jpg";
import Trip3 from "../assets/card3.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>
                Recent Trips
            </h1>
            <p>
                You can discover unique destination using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia,
                 is a transcontinental country spanning the southeastern 
                part of Asia and western part of Oceania between the Indian 
                and Pacific oceans.Indonesia is the world's fourth-most populous 
                country and the most populous Muslim-majority country."
                />
                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia has its origins in the Malay kingdoms, which, from the 
                18th century on, became subject to the British Empire, along with the 
                British Straits Settlements protectorate. In August 1965, 
                Singapore was expelled from the federation and became a separate independent country."
                />
                <TripData
                image={Trip3}
                heading="Trip in France"
                text="France is a unitary semi-presidential republic with its capital in Paris, 
                the country's largest city and main cultural and commercial centre; other major 
                urban areas include Marseille, Lyon, Toulouse, Lille, Bordeaux, and Nice."
                />
            </div>
        </div>
    )
}

export default Trip;