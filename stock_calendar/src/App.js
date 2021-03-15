import React from "react";

function Cal ({day, events}) {
	console.log(day, events);
	return (
		<div className="test">
			<h1>Today : {day}</h1>
			<h2>{events}</h2>
		</div>
	)
}

//api에서 데이터를 얻어왔다고 가정
const cal_data = [
	{
		day : 1,
		events : ["가나다", "라마바"]
	},
	{
		day : 2,
		events : ["휴가", "전역"]
	},
	{
		day : 3,
		events : ["강아지", "고양이"]
	}
]


function App() {
  return (
    <div className="App">
		{cal_data.map(item => (
			<Cal key={item.day} day={item.day} events={item.events} />  
		))}
    </div>
  );
}

export default App;
