// function nameDecorator(target: any, key: string): any {
//   const decriptor: PropertyDescriptor = {
//     writable: false
//   };
//   return decriptor;
// }

// test.name = 'jenny chan';

// 修改的并不是实例上的 name,而是原型上的name
function nameDecorator(target: any, key: string): any {
  target[key] = 'chan';
}

// name 放在实例上
class Test {
  @nameDecorator
  name = 'jenny';
}

const test = new Test();
console.log((test as any).__proto__.name);
