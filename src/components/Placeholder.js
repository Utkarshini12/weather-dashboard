import Home from "../assets/home.gif";

export const Placeholder = () => {
    return(
        <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="glass-card p-5">
            <h1 className="text-light">Weather Application</h1>
            <img src= {Home} alt={"home"} />
            <p>Use the weather app daily before stepping out of the house. 
                <br />
                Track all the cities where your loved one's live. 
                <br />
                Always have a joyful day with Weather App.
            </p>
        </div>
      </div>
    )
}