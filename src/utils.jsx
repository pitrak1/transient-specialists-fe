export const displayDateFromISO = iso => {
  if (iso && typeof iso === 'string') {
    const date = new Date(iso)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
  return null
}

export function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}