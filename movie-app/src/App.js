import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  //랜더나 업데이트를 할때의 순서 : 항상 이렇게 작동!
  
  //니콜라스 : 똑똑한 컴포넌트는 state가 있고 멍청한 컴포넌트는 state가 없다 prop뿐.
  state = {
   
  }

  componentDidMount(){
   setTimeout(()=>{ //와 setTimeout(function(){는 동일, but 최신js - 옛js
    this.setState({
       movies : [
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
      },
      {
        title:"Coco",
        poster:"https://www.cineworld.ie/xmedia-cw/repo/feats/posters/HO00004273.jpg"
      }
      ]
    })
   }, 3000)
  }
  _renderMovies = ()=> { //최신 자바스크립트
    const movies=this.state.movies.map((movie, index)=>{
      //movies변수에 데이터 저장, 기능 실행시 variables 출력(매핑을 통해 제목과 포스터 보이기)
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() { // : 컴포넌트의 state가 바뀔때마다 발생됨
    return (
      <div className="App">
      {/* 내가 찾고있는 데이터 있니? 있으면 _rend(), 없으면 로딩/ 
            => loading - - - 3초 후에 setState해서 movie render하기!
          리액트는 자체 func이 많아서 _ 를 이용해 나의 func에 차이두기 */}
        {this.state.movies ? this._renderMovies():'Loading'}
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

  Q : How do you access the state of the component?
  A : this.state.
  Q : How do you change the state of the component?
  A : this.setState({})
  Q : What happens if the state changes?
  A : The component renders (render()) again

  최신 자바스크립트에 대한 니콜라스의 링크!
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


*/

