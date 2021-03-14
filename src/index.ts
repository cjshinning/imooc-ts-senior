// 原型，方法名，参数所在位置
function paramDecorator(target: any, method: string, paramIndex: number): any {
  console.log(target, method, paramIndex);
}

// name 放在实例上
class Test {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('Jenny', 18);
