import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import cardData from '../data.js'



export default function App() {
  const cardElements = cardData.map(item => {
      return <Card 
              key = {item.id} 
//            item = {item} 
              {...item}
              />
    }
  )
 
  return (
    <>
      <Navbar />
      <section className="cards-list">
            {cardElements}
      </section>
    </>
  )
}


/*
React Course - Beginner's Tutorial for React JavaScript Library [2022]

https://www.youtube.com/watch?v=bMknfKXIFA8

https://www.figma.com/file/h0viMlQ0KdMTM7GVBvhWPk/Travel-Journal-(Copy)?type=design&node-id=0-1&mode=design&t=VfAMnYlOfBl7Mikg-0

Requirements:
1. Data array in a separate .js file
  a) Title, location, Google Maps link, start date, end date, description, image URL
*/