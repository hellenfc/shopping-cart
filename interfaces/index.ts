// You can include shared interfaces/interfaces in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface User {
  id: number
  name: string
}


export interface IProduct {
  id: number,
  name: string,
  value: number,
  image: string,
  amount?: number
}