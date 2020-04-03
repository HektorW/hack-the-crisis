import classNames from 'classnames'
import React, { ReactNode } from 'react'

import styles from './page-layout.scss'

interface PageLayoutProps {
  title?: string

  className?: string
  children: ReactNode
}

export default function PageLayout({
  title,

  className,
  children
}: PageLayoutProps) {
  return (
    <div className={classNames(styles['page-layout'], className)}>
      <header className={styles['page-layout__header']}>
        {title && (
          <h1 className={styles['page-layout__header-title']}>{title}</h1>
        )}
      </header>

      <main className={styles['page-layout__content']}>{children}</main>
    </div>
  )
}
