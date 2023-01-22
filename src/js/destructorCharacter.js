export default function destructorCharacter(obj) {
  const result = [];

  const { special } = obj;

  for (const prop in special) {
    if (Object.prototype.hasOwnProperty.call(special, prop)) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = special[prop];
      result.push({
        id, name, icon, description,
      });
    }
  }

  return result;
}
