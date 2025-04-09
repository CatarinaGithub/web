import { UserProps } from './User';

export class Attributes<T extends object> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// sample usage
// Assuming UserProps is defined in User.ts
// and has properties id, name, and age
const attrs = new Attributes<UserProps>({
  id: 1,
  name: 'Cat',
  age: 38,
});

const name = attrs.get('name'); // name is of type string
const age = attrs.get('age'); // age is of type number
const id = attrs.get('id'); // id is of type number | undefined
