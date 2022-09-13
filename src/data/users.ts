type User = {
  id: number,
  name: string,
  email: string,
  active: boolean,
}

export const users: User[] = [
  {
    id: 1,
    name: 'Ashley Mcdaniel',
    email: 'ashleymcdaniel@nebulean.com',
    active: true,
  },
  {
    id: 2,
    name: 'Todd Sellers',
    email: 'sellerstodd@nebulean.com',
    active: true,
  },
  {
    id: 3,
    name: 'Sherman Knowles',
    email: 'shermanknowles@nebulean.com',
    active: false,
  },
  {
    id: 4,
    name: 'Vasquez Lawson',
    email: 'vasquezlawson@nebulean.com',
    active: true,
  },
]
