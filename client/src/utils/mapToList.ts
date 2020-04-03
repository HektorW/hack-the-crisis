export default function nonNullableMapToList<T>(
  map: Record<string, T>
): NonNullable<T>[] {
  const allKeys = Object.keys(map)
  return allKeys.map(key => map[key]!).filter(Boolean)
}
