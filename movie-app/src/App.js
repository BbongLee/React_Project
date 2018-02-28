import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {

  }

  componentDidMount(){
    //실제 영화 api불러오기! 평점 순으로 정렬 :>  모든 링크가 fetch가능하답니다!
    //ajax는 url을 자바스크립트로 비동기화(Asynchronous)방법으로 불러온다.
    //니콜라스 : Ajax는 자바스크립트와 같이 데이터를 뒤에 숨어서 다룰 수 있어서 멋져!
    fetch('https://yts.am/api/v2/list_movies.json?sortby=rating') //=> promise
    //promise : 비동기화, 앞의 라인과 상관없이 작업한다. 다른 작업 수행이랑 관계없이 진행된다. 
    //약속!의 원리와 비슷 2가지의 시나리오로 이루어짐 fetch와 같이 시나리오가 생기고 관리할 수 있다
    .then() //위 라인이 완료되면 실행
    .catch(err => console.log(err)) //에러나면 잡아서 보여줘!!
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

  JSON : JavaScript Object Notationv, 오브젝트를 자바스크립트로 작성하는 기법
  AJAX : 비동기화! 요즘은 xml이아니라 json이 되고있다. 새로고침 없이 작업 가능, 리액트와 작업이 간편하다

*/

