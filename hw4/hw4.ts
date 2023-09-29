//1
export default function MyFunction(...props: number[]) {
  //rest parameter
  let max = 0;
  for (let i = 1; i < props.length; i++) {
    if (max < props[i]) max = props[i];
  }
  return max;
}

console.log(MyFunction(6, 3, 7, 2));

//2
function MyFunction2({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: false;
}) {
  console.log(user, comment, admin);
}

MyFunction2({ user: "kim", comment: [3, 5, 4], admin: false });

//3
type myArr = (number | string | boolean)[];

function MyFunction3([a, b, c]: myArr) {
  console.log(a, b, c);
}

MyFunction3([40, "wine", false]);

//4
type MyType = {
  //type alias
  color?: string;
  size: number;
  position: number[];
};

let props: MyType = { size: 10, position: [1, 2, 3] };
console.log(props);
