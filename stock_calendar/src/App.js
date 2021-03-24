// import React from "react";
// // import PropTypes from "prop-types"; // prop의 types 이 사전에 설정한 타입이 맞는지 검사

// function Cal ({day, events}) {
// 	console.log(day, events);
// 	return (
// 		<div className="test">
// 			<h1>Today : {day}</h1>
// 			<h2>{events} </h2>
// 		</div>
// 	)
// }

// // Cal.propTypes = {
// // 	day : PropTypes.number.isRequired,
// // 	events: PropTypes.array.isRequired
// // }


// //api에서 데이터를 얻어왔다고 가정
// const cal_data = [
// 	{
// 		day : 1,
// 		events : ["가나다", "라마바"]
// 	},
// 	{
// 		day : 2,
// 		events : ["휴가", "전역"]
// 	},
// 	{
// 		day : 3,
// 		events : ["강아지", "고양이"]
// 	},
// 	{
// 		day : 4,
// 		events : ["강아지", "고양이"]
// 	},
// 	{
// 		day : 5,
// 		events : ["강아지", "고양이"]
// 	}
// ]


// function App() {
//   return (
//     <div className="App">
// 		{cal_data.map(item => (
// 			<Cal key={item.day} day={item.day} events={item.events} />  
// 		))}
//     </div>
//   );
// }

// export default App;


import React from "react";
import PropTypes from "prop-types"; // prop의 types 이 사전에 설정한 타입이 맞는지 검사
import axios from "axios"; // data fetch
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{

	
	state = {
		isLoading : true,
		movies: []
	}

	getMovies = async () => {
		const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
		console.log(movies);
		// == this.setState({movies : movies, isLoading: false}) 여기서 왼쪽 movies는 state, 오른쪽 movies는 axios로 부터 왔으며 js가 똑똑해서 그냥 아래처럼 써도 이해하는 것이다.
		this.setState({movies, isLoading:false})
	}
	
	componentDidMount() {
		this.getMovies();
		
	}
	
	render() {
		const { isLoading, movies } = this.state;
		
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader_text">Loading...</span>
					</div> 
					) : (
					<div className="movies">
						{movies.map(movie => (
							<Movie
								key={movie.id}
                				id={movie.id}
               				 	year={movie.year}
              					title={movie.title}
                				summary={movie.summary}
                				poster={movie.medium_cover_image}
								genres={movie.genres}

              				/>
						))}
					</div>
					)	
				}
			</section>
		);
	}

	
	
}

export default App;
