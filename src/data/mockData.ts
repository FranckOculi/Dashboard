enum ACCESS {
	'admin',
	'manager',
	'staff',
}

type Team = {
	id: number
	displayName: string
	email: string
	age: number
	phone: string
	access: keyof typeof ACCESS
}

export const mockDataTeam: Team[] = [
	{
		id: 1,
		displayName: 'John Doe',
		email: 'johndoe@gmail.com',
		age: 35,
		phone: '0685967452',
		access: 'admin',
	},
	{
		id: 2,
		displayName: 'Jane Doe',
		email: 'janedoe@gmail.com',
		age: 28,
		phone: '0685967458',
		access: 'manager',
	},
	{
		id: 3,
		displayName: 'Cersei Lanister',
		email: 'cerseilanister@gmail.com',
		age: 33,
		phone: '0685967414',
		access: 'manager',
	},
	{
		id: 4,
		displayName: 'John Snow',
		email: 'johnsnow@gmail.com',
		age: 41,
		phone: '0685967414',
		access: 'staff',
	},
	{
		id: 5,
		displayName: 'Little Finger',
		email: 'littlefinger@gmail.com',
		age: 42,
		phone: '0654784512',
		access: 'staff',
	},
	{
		id: 6,
		displayName: 'Eddard Stark',
		email: 'eddardstark@gmail.com',
		age: 42,
		phone: '0632659845',
		access: 'staff',
	},
	{
		id: 7,
		displayName: 'Little Finger',
		email: 'littlefinger@gmail.com',
		age: 42,
		phone: '0652639685',
		access: 'staff',
	},
]
