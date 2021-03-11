// 普通方法，target对应的是类的prototype
// 静态方法，target对应的是类的构造函数

function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target, key);
  // descriptor.writable = true;
  descriptor.value = function() {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test = new Test('jenny');
console.log(test.getName());
