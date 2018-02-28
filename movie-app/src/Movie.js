import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/> 
            {/* this.props. 삭제하기! 더이상 클래스가 아녜요~~! */}
            <h1>{title}</h1>
            {/* JSX일경우 명령을 실행시키려면 괄호를 꼭 써야함 */}
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

//클래스 컴포넌트 대신 stateless functional 컴포넌트로 바꾸는 방법
//render, lifecycl, component will mount, function, update state 다 필요없다
//하나의 poster라는 props만 필요하다! return 뿐 ~ !!!
//but state를 잃으면 업데이트 등의 기능이 다 사라진다 !!
function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
export default Movie