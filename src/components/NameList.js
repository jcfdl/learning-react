import React from 'react';
import PersonList from './PersonList'

function NameList() {
	const names = ['Jc', 'Josh', 'mae']
	// const persons = [
	// 	{
	// 		id: 1,
	// 		name: 'JC',
	// 		age: 23,
	// 		skill: 'All'
	// 	}, 
	// 	{
	// 		id: 2,
	// 		name: 'Joshua',
	// 		age: 21,
	// 		skill: 'None'
	// 	}
	// ]			

	// const personList = persons.map(person => <PersonList key={person.id} person={person} />)

	const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

	return <div>{nameList}</div>
}

export default NameList;
	