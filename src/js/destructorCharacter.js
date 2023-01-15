export default function destructorCharacter(obj) {
  const result = [];
  const { special: [item1, item2] } = obj;

  function destructorItems(arr) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = arr;
    return {
      id, name, icon, description,
    };
  }

  result.push(destructorItems(item1), destructorItems(item2));

  return result;
}
