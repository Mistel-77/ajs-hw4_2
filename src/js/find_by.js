export default function findBy(key, value) {
  const keyNew = key;
  const valueNew = value;
  return (item) => {
    if (item[keyNew] === valueNew) {
      return true;
    }
    return false;
  };
}
