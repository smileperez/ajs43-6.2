export default function destructorCharacter(obj) {
  const result = [];

  const { special } = obj;

  for (const prop in special) {
    const {id, name, icon, description = 'Описание недоступно' } = special[prop];
    result.push( {id, name, icon, description} );
  }

  return result;
}
