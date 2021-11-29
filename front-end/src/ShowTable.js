import React from "react";

function TableHeader() {
	return (
		<thead>
			<tr>
				<th>Show Name</th>
				<th>Genre</th>
				<th>Episodes</th>
				<th>Rating</th>
				<th>Status</th>
				<th>Delete</th>
			</tr>
		</thead>
	);
}

function TableBody(props) {
	let urlparam = window.location.pathname;
	var username = ""
	for (let i = 8; i < urlparam.length; i++) {
	  username += urlparam[i];
	}
	console.log(username);
	console.log("In TableBody")
	console.log(props.characterData); // When refresh page, doesn't recognize props.characterData
	var myInfo;
	for(let i = 0; i < props.characterData.length; i++){
		// console.log(props.characterData[i]['name']);
		if(props.characterData[i]['name'] === username){
			myInfo = props.characterData[i]['shows']
		}
	}
	console.log("In TableBody")
	console.log(myInfo);
	const rows = myInfo.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.genre}</td>
				<td>{row.episode}</td>
				<td>{row.rating}</td>
				<td>{row.status}</td>
				<td> <button onClick={() => props.removeShow(index, row.user)}>Delete</button> </td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
}

function Table(props) {
	console.log(props);
	return (
		<table>
			<TableHeader />
			<TableBody characterData={props.characterData} removeShow={props.removeShow}/>
		</table>
	);
}

export default Table;