import './App.css';

// function App() {
//   let number=1
//   const Checknumber=({number})=>{
//     if (number>0){
//       return <h1>Positive Number</h1>
//     }else if(number<0){
//       return<h1>Negative</h1>

//     }else{
//       return <h1>Zero</h1>
//     }
//   }
//   return (
//     <div className="App">
//       <Checknumber/>{number}
//     </div>
//   );
// }

// function App(){
//   let number=1

//   return (
//     <div className="App">
//       {number>0?<h1>positive</h1>:number<0?<h1>negative</h1>:<h1>zero</h1>}
//       </div>
//   )
// }

function App() {
  let number=1
let IsLoggedin=false
  return (
    <div className="App">

      {
        IsLoggedin? <h1>welcome to website</h1>:<h1>please login</h1>
      }

      </div>
  )
}

export default App;
