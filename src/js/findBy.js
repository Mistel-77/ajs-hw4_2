/* export default function findBy(key, value) {
  return (item) => {
    if (item[key] === value) {
      return true;
    }
    return false;
  };
} */

const findBy = (key, value) => (item) => (item[key] === value);
export default findBy;
