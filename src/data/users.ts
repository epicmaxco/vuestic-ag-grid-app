export type User = {
  id: number,
  image: string,
  name: string,
  email: string,
  active: boolean,
}

export const users: User[] = [
  {
    id: 1,
    image: 'https://picsum.photos/id/100/50/50',
    name: 'Ashley Mcdaniel',
    email: 'ashleymcdaniel@nebulean.com',
    active: true,
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/200/50/50',
    name: 'Todd Sellers',
    email: 'sellerstodd@nebulean.com',
    active: true,
  },
  // {
  //   id: 3,
  //   image: 'https://picsum.photos/id/35/50/50',
  //   name: 'Sherman Knowles',
  //   email: 'shermanknowles@nebulean.com',
  //   active: false,
  // },
  // {
  //   id: 4,
  //   image: 'https://picsum.photos/id/400/50/50',
  //   name: 'Vasquez Lawson',
  //   email: 'vasquezlawson@nebulean.com',
  //   active: true,
  // },
]
