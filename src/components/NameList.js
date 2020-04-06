import React from 'react';
import PersonList from './PersonList'

function NameList() {
	// const names = ['Jc', 'Josh', 'mae']
	const persons = [
		{
			id: 1,
			name: 'JC',
			age: 23,
			skill: 'All'
		}, 
		{
			id: 2,
			name: 'Joshua',
			age: 21,
			skill: 'None'
		}
	]			

	const personList = persons.map(person => <PersonList person={person} />)
	return <div>{personList}</div>
}

export default NameList;
	