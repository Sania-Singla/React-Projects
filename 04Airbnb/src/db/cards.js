import bike from "../images/bike.png"
import wedding from "../images/wedding.png"
import katie from "../images/katie.png"

const cards = [
    {
      id:1,
      img:katie,
      descr:"Life lessons with Katie Zaferes", 
      price:136,
      rating:5,
      reviewCount:6,
      openSpots:0,
      location:"USA"
    },
    {
      id:2,
      img:wedding,
      descr:"Learn wedding photography" ,
      price:125 ,
      rating:5,
      reviewCount:30,
      openSpots:1,
      location:"Online"
    },
    {
      id:3,
      img:bike,
      descr:"Group Mountain Biking" ,
      price:50,
      rating:4.8,
      reviewCount:2,
      openSpots:0,
      location:"Canada"
    },
    {
      id:4,
      img:bike,
      descr:"Group Mountain Biking" ,
      price:50,
      rating:4.8,
      reviewCount:2,
      openSpots:5,
      location:"USA"
    }
] 

export default cards;