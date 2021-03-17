import PropTypes from "prop-types"; // prop의 types 이 사전에 설정한 타입이 맞는지 검사


class App extends React.Component{
	state = {
		cnt : 0
	}
	
	// setState를 호춣 ㅏㄹ 때 render function이 호출 되므로 render function이 값이 수정 되었을 때 자동 호출되게 ㅏ기 위해서는 state 를 직접 이용해서 건드리는 방식을 최대한 피해야한다.
	add = () => {
		this.setState(current => ({cnt : current.cnt + 1}))
	};
	minus = () => {
		this.setState(current => ({cnt : current.cnt - 1}))
	};
	render(){
		return <div>
			<h1>{this.state.cnt}</h1>
			<button onClick = {this.add}>add</button>
			<button onClick = {this.minus}>minus</button>
		</div>
	}
	
}