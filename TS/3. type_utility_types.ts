interface Foo {
  a: number;
  b: number;
}

type Bar = {
  a: number;
  b: number;
}

type NumberOrStringArray = (number | string)[];

const foo: Foo = {
  a: 1,
  b: 2
}

const arr: NumberOrStringArray = [1, '2']

interface User {
  name: string;
  lastname: string;
  age: number;
  height: number;
  street: string;
}

type UserDto = Partial<User>;

type UserEntity = User & {
  id: string;
}

type SimpleUser = Pick<User, 'name' | 'lastname'>