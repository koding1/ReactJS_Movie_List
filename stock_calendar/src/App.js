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


class App extends React.Component{

	
	state = {
		cnt : 0
	}
	
	// setState를 호출 할 때 render function이 호출 되므로 render function이 값이 수정 되었을 때 자동 호출되게 ㅏ기 위해서는 state 를 직접 이용해서 건드리는 방식을 최대한 피해야한다.
	add = () => {
		this.setState(current => ({cnt : current.cnt + 1}));
	};
	minus = () => {
		this.setState(current => ({cnt : current.cnt - 1}));
	};

	componentDidUpdate() {
		console.log("ag");
	}
	
	render(){
		return <div>
			<h1>{this.state.cnt}</h1>
			<button onClick = {this.add}>add</button>
			<button onClick = {this.minus}>minus</button>
		</div>
	}
	
	
}

export default App;
