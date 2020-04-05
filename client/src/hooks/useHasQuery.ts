export default function useHasQuery(queryKey: string, value?: string) {
  if (typeof URLSearchParams === 'undefined') {
    return
  }

  const urlSearchParams = new URLSearchParams(location.search)

  if (!urlSearchParams.has(queryKey)) {
    return false
  }

  if (value && urlSearchParams.get(queryKey) !== value) {
    return false
  }

  return true
}
