function nullary_constructor(name: string): string {
  return `{kind: '${name}'}`
}

function sum_type_internal(type_name: string, constructor_names: string[]): string {
  const constructors = constructor_names.map(nullary_constructor)
  const union = constructors.map(constructor => `| ${constructor}`).join('\n')

  return `type ${type_name} =\n${union}\n`
}

function sum_type(type_name: string, constructor_names: string[]): void {
  console.log(sum_type_internal(type_name, constructor_names))
}

export { sum_type }