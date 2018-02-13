import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes ={
        title:PropTypes.string.isRequired, //String이어야함
        poster:PropTypes.string.isRequired //isRequired -> 필수요건!! 있는지 없는지 알기 편함
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

//클래스 컴포넌트 대신 stateless functional 컴포넌트로 바꾸는 방법
//render, lifecycl, component will mount, function, update state 다 필요없다
//하나의 poster라는 props만 필요하다! return 뿐 ~ !!!
function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
export default Movie