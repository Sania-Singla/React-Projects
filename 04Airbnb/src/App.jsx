import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import cards from './db/cards'
 
function App() {
  //make an elements array out of object array using .map()
  const cardElements = cards.map(card =>{
    return(
      <Card 
        key={card.id}    //we just need to set an attribute "key" to some unique value foe each component else we will get a warningso just do it (could be the id from db becuase that is definately going to be unique)
        // img={card.img} 
        // descr={card.descr} 
        // price={card.price} 
        // rating={card.rating} 
        // reviewCount={card.reviewCount}
        // location={card.location}
        // openSpots={card.openSpots}

        //give directly the object na
        card={card} 
        //another method 
        // {...card}    it will similar to the first method 👆 but will create the attributes with same name as in the db like in the above method we could have given custom names as well but this method is not appleaing so stick with second method
      />
    )
  })

  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <div className="cards">
        {cardElements}        
      </div>

        {/* dynamic approach 👆 */}
        {/* <div className="cards">
          <Card 
            img={katie} 
            descr="Life lessons with Katie Zaferes" 
            price={136} 
            rating={5.0} 
            reviewCount={6}
          />
          <Card 
            img={wedding}
            descr="Learn wedding photography" 
            price={125} 
            rating={5.0} 
            reviewCount={30}
          />
          <Card 
            img={bike} 
            descr="Group Mountain Biking" 
            price={50} 
            rating={4.8}
            reviewCount={2}
          />
        </div> */}

    </div>
  )
}

export default App
