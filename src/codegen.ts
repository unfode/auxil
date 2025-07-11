function nullary_constructor(name: string): string {
  return `{kind: '${name}'}`
}

function sum_type_internal(type_name: string, constructor_names: string[]): string {
  const constructors = constructor_names.map(nullary_constructor)
  const union = constructors.map(constructor => `| ${constructor}\n`).join('')

  const constructor_maker = (name: string): string => `function ${name}(): ${type_name} {\n  return {kind: '${name}'}\n}\n`
  const constructor_makers = constructor_names.map(constructor_maker).join('')

  return `type ${type_name} =\n${union}${constructor_makers}\n`
}

function sum_type(type_name: string, constructor_names: string[]): void {
  console.log(sum_type_internal(type_name, constructor_names))
}

export { sum_type }