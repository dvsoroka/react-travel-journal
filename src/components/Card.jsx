export default function Card(props) {
      console.log(props)
    //  console.log(props.item.title)
      let locationn = props.location
      const locationUpper = locationn.toUpperCase()
      return (
          <div className="card">
              <img className="card--image" src={props.imageUrl} />
              <div className="card--text">
{/*               <img className="card--point" src="./src/assets/img/Point.png" />      */}
                  <img className="card--point" src="./src/assets/img/point.svg" />
 {/*                 <span>&#x2005;{props.location}</span>      */}
                  <span className="card--location">&#x2005;{locationUpper}</span>
                  <a className="gray" href={props.googleMapsUrl}>&#x2005;&#x2005;&#x2005;<span className="underline">View on Google Maps</span></a> 
                  <h2 className="card--title">{props.title}</h2>
                  <p className="card--interval"><span className="bold">{props.startDate} - {props.endDate}</span></p>
                  <p className="card--description">{props.description}</p>
              </div>
              
          </div>
        )
    }
    