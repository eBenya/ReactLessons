import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function id() {
	return nanoid();
}

const initNotes = [
	{
		id: id(),
		fields: [
			{ name: 'prop1', value: 'value11', isEdit: false },
			{ name: 'prop2', value: 'value12', isEdit: false },
			{ name: 'prop3', value: 'value13', isEdit: false },
		]
	},
	{
		id: id(),
		fields: [
			{ name: 'prop1', value: 'value21', isEdit: false },
			{ name: 'prop2', value: 'value22', isEdit: false },
			{ name: 'prop3', value: 'value23', isEdit: false },
		]
	},
	{
		id: id(),
		fields: [
			{ name: 'prop1', value: 'value31', isEdit: false },
			{ name: 'prop2', value: 'value32', isEdit: false },
			{ name: 'prop3', value: 'value33', isEdit: false },
		]
	},
];

function App() {

	const [notes, setNotes] = useState(initNotes);

	const rows = notes.map(note => {
		const cells = note.fields.map(field => {
			let element;
			if (field.isEdit) {
				element = <input
					value={field.value}
					onChange={e => changeCell(note.id, field.name, e)}
					onBlur={() => endEdit(note.id, field.name)}
				/>
			}
			else {
				element = <span onClick={() => startEdit(note.id, field.name)}>{field.value}</span>
			}

			return <td key={field.name}>{element}</td>
		});
		return <tr key={note.id}>{cells}</tr>
	});

	function changeCell(noteId, fieldName, event) {
		changeState(noteId, fieldName, 'value', event.target.value)
	}
	function endEdit(noteId, fieldName) {
		changeState(noteId, fieldName, 'isEdit', false)
	}
	function startEdit(noteId, fieldName) {
		changeState(noteId, fieldName, 'isEdit', true);
	}
	function changeState(noteId, fieldName, editedField, value) {
		setNotes(notes.map(note => {
			if (note.id === noteId) {
				const fields = note.fields.map(field => {
					if (field.name === fieldName) {
						return { ...field, [editedField]: value };
					}
					else {
						return field;
					}
				});
				// Важный момент, если вернуть без "id:",
				// то поле, содержащее id, станет называться noteId !!!!!!!!
				return { id:noteId, fields:fields };
			}
			else {
				return note;
			}
		}));
	}

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<table border="1px">
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default App;
