import Joke from './components/joke'
import Test from './components/test'
// props basics
function App() {
// const colors = [<h1>red</h1>,<h1>blue</h1>,"<h1>green</h1>"];
  const jokesData = [
    {
      title:"Joke 1",
      joke:"this is the first joke",
      isPun:true,
      likes:8,
      comments:["i liked it","i hated it"],
      author:{
        name:"sania",
        age:17
      }
    },
    {
      title:"Joke 2",
      joke:"this is the second joke",
      isPun:false,
      likes:4,
      comments:["i learned from it","i hated it"],
      author:{
        name:"ritik",
        age:18
      }
    },
    {
      title:"Joke 3",
      joke:"this is the third joke",
      isPun:true,
      likes:4,
      comments:["i liked it","i hated it"],
      author:{
        name:"himanshu",
        age:20
      }
    },
    {
      title:"Joke 4",
      joke:"this is the fourth joke",
      isPun:true,
      likes:5,
      comments:["i liked it","i hated it"],
      author:{
        name:"sumit",
        age:28
      }
    },
    {
      title:"Joke 5",
      joke:"this is the fifth joke",
      isPun:false,
      likes:10,
      comments:["i liked it","i hated it"],
      author:{
        name:"neha",
        age:10
      }
    },
  ]

  // so we are making an array of elements to be rendered using the array of objects (which could be fetched from db)
  const jokes = jokesData.map( joke => {
    return (
      <Joke 
        title={joke.title} 
        joke={joke.joke}
        isPun={joke.isPun} 
        likes={joke.likes} 
        comments={joke.comments}  
        author={joke.author} 
      />
    )
  })
  //better method becuase this was no difference than hard coding the data👆
  // const jokes = [
  //   <Joke title="Joke 1" joke="this is the first joke" isPun={true} likes={4} comments={["i loved it", "i hated it"]}  author={{name:"sania" ,age:17}}/> , 
  //   <Joke title="Joke 2" joke="this is the second joke"  isPun={false} likes={2} comments={["i learned from it", "i hated it"]} author={{name:"sania" ,age:17}}/>,
  //   <Joke title="Joke 3" joke="this is the third joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>,
  //   <Joke title="Joke 4" joke="this is the fourth joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>,
  //   <Joke title="Joke 5" joke="this is the fifth joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>,
  //   <Joke joke="this is the odd joke" />
  // ]
  return (
    <div>  
      {jokes}   {/*react has the capability to loop over the array and render the elements so dont worry about that rendering part*/}
      {/* {colors} */}
      {/* <Joke title="Joke 1" joke="this is the first joke" isPun={true} likes={4} comments={["i loved it", "i hated it"]}  author={{name:"sania" ,age:17}}/>
      <Joke title="Joke 2" joke="this is the second joke"  isPun={false} likes={2} comments={["i learned from it", "i hated it"]} author={{name:"sania" ,age:17}}/>
      <Joke title="Joke 3" joke="this is the third joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>
      <Joke title="Joke 4" joke="this is the fourth joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>
      <Joke title="Joke 5" joke="this is the fifth joke"  isPun={true} likes={4} comments={["i loved it", "i hated it"]} author={{name:"sania" ,age:17}}/>
      <Joke joke="this is the odd joke" /> */}

      <Test name="sania"/>

    </div>
  )
}

export default App
