export default function imported() {
  const test_array = [5,2,1,3,4];
  let position = test_array.findIndex(value => {
    return value === 1;
  });
  return `This function was imported. The position of 1 is ${position}.`;
}