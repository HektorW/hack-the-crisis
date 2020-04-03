import useOnMount from '../../../hooks/useOnMount'

import styles from './shake-screen.scss'

export default function ShakeScreen() {
  useOnMount(() => {
    const body = document.body

    body.classList.add(styles['shake-screen'])

    return () => {
      body.classList.remove(styles['shake-screen'])
    }
  })

  return null
}
