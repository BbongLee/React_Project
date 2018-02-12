import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//메인컴포넌트가 데이터 가짐.

const movies = [
{
  title:"Matrix",
  poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
},
{
  title:"Full Metal Jacket",
  poster:"https://images-na.ssl-images-amazon.com/images/I/81XARapmq6L._RI_SX200_.jpg",
},
{
  title:"Oldboy",
  poster:"https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
},
{
  title:"Star Wars",
  poster:"http://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg",
}
]

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  //랜더나 업데이트를 할때의 순서 : 항상 이렇게 작동!
  
  state = {
    greeting: "Hello!"
  }

  componentDidMount(){
    setTimeout(()=>{
      // this.state.greeting = "blabla" : Do not mutate state directly => render설정들이 작동하지 않아요!
      //state를 바꿀 때, setState설정하기
      this.setState({//업데이트마다 render작동
        greeting : 'Hello again!!'
      })
    },5000) //5초 후 hello again으로 바뀌어요!
  }

  render() { // : 컴포넌트의 state가 바뀔때마다 발생됨
    return (
      <div className="App">
      {this.state.greeting} 
        {movies.map((movie, index) => { //movie마다 index를 주고 고유key값 만들어주기! 
          // 리스트 작성 방법 : movies 배열 --매핑--> 새로운 배열 => 더 더 단순해졌다!
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;


//NomadAcademy Quiz : 기억해놓으면 아주 유용할 요점정리!!
//https://academy.nomadcoders.co/courses/216871/lectures/3393415#/questions/3
/*
  Q1 : Props are? 
  A1 : the way a father component gives information to a child component
  Q2 : How can I access the props on the child component? 
  A2 : By calling 'this.props'
  Q3 : How can I check what kind of props the components are getting?
  A3 : By using 'prop-types'
  Q4 : How can I make a string prop required?
  A4 : PropTypes.string.isRequired
*/