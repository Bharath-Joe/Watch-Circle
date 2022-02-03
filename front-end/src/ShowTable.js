import React, { useState, useEffect } from 'react';

function TableHeader() {
	return (
		<thead>
			<tr>
				<th>Show Name</th>
				<th>Genre</th>
				<th>Episodes</th>
				<th>Rating</th>
				<th>Status</th>
			</tr>
		</thead>
	);
}

function TableBody(props) {
	let urlparam = window.location.pathname;
	var username = ""
	//Extract Username for URL
	for (let i = 8; i < urlparam.length; i++) {
	  username += urlparam[i];
	}
	console.log("Character Data: ")
	console.log(props.characterData)
	console.log(props.characterData.length); // When refresh page, doesn't recognize props.characterData
	var myInfo;
	//Parse Data to find shows for said username
	for(let i = 0; i < props.characterData.length; i++){
		if(props.characterData[i]['name'] === username){
			myInfo = props.characterData[i]['shows']
		}
	}
	console.log("User's Shows: ")
	console.log(myInfo);
	const rows = myInfo.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.genre}</td>
				<td>{row.episode}</td>
				<td>{row.rating}</td>
				<td>{row.status}</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
}

function Table(props) {
	if (props.characterData.length > 0){
		return (
			<table>
				<TableHeader />
				<TableBody characterData={props.characterData}/>
			</table>
		);
	}
	return (
		<table>
			<TableHeader />
		</table>
	);

}

export default Table;