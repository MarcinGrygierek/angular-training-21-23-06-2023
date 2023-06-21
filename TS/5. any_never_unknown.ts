let val: any = 123123;
val = '123123';
val = true;

let foo: unknown = 123123;
foo = 'asdasdads';
foo = true;
foo = 12345;

console.log((foo as number).toFixed(2));
console.log((<number>foo).toFixed(2));
console.log(val.toFixed(2));

const alwaysThrow = (): never => {
    throw new Error();
}
