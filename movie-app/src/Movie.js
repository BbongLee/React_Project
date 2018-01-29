import React, { Component } from 'react'
import './Movie.css';

class Movie extends Component {
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
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie