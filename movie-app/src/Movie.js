import React, { Component } from 'react'
import './Movie.css';

class Movie extends Component {

    static propTypes ={
        title:React.propTypes.string.isRequired, //String이어야함
        poster:React.propTypes.string.isRequired //isRequired -> 필수요건!! 있는지 없는지 알기 편함
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
                {/* JSX일경우 명령을 실행시키려면 괄호를 꼭 써야함 */}
            </div>
        )
    }
}

class MoviePoster extends Component{
    static propTypes = { //이미지 꼭 필요하니까!
        poster: propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie