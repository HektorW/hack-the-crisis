import React from 'react'

import styles from './full-page-loader.scss'

interface FullPageLoaderProps {}

export default function FullPageLoader({}: FullPageLoaderProps) {
  return <div className={styles['full-page-loader']}>Loading</div>
}
