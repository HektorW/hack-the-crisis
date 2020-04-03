import React, { ReactNode } from 'react'

import styles from './page-layout.scss'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <main className={styles['page-layout']}>{children}</main>
}
