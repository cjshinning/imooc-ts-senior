// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数是构造函数
// 装饰器通过 @ 符号来使用

function testDecorator() {
  return function<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = 'chan';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

const test = new Test('jenny');
console.log(test.getName());
