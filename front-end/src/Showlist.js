import React from "react";

function TableHeader() {
	return (
		<thead>
			<tr>
				<th>Show Name</th>
				<th>Image/Thumbnail</th>
				<th>Delete Show</th>
			</tr>
		</thead>
	);
}

function TableBody(props) {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row._id}</td>
				<td>
					<button onClick={() => props.removeCharacter(index)}>
						Delete Show
					</button>{" "}
				</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;
}

function TableFooter(props) {
	return (
			<tr>
                <td><button onClick={() => props.addShow()}>Add Show</button> </td>
                <td><button onClick={() => props.filterShows()}>Filter Shows</button> </td>
			</tr>
	);
    }

function Table(props) {
	return (
		<table>
			<TableHeader />
			<TableBody
				characterData={props.characterData}
				removeCharacter={props.removeCharacter}
			/>
			<TableFooter
				characterData={props.characterData}
				addShow={props.addShow}
			/>
		</table>
	);
}

export default Table;