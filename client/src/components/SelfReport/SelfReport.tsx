import React from 'react'
import { useHistory } from 'react-router-dom'

import QuestionCard from '../QuestionCard'

import styles from './self-report.scss'

interface SelfReportProps {}

export default function SelfReport({}: SelfReportProps) {
  const history = useHistory()

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    // TODO : Something with form data

    history.push('/')
  }

  return (
    <form className={styles['self-report__form']} onSubmit={onFormSubmit}>
      <QuestionCard
        name="temperatur"
        text="Vad har du för kroppstemperatur?"
        options={[
          { text: 'Under 38 °C', value: '< 38' },
          { text: '38 - 39.5 °C', value: '38 - 39.5' },
          { text: 'Över 39.5 °C', value: '> 39.5' }
        ]}
      />

      <QuestionCard
        name="hosta"
        text="Har du hosta?"
        options={[
          { text: 'Nej', value: 'nej' },
          { text: 'Ja, Ibland', value: 'ibland' },
          { text: 'Ja, Ofta', value: 'ofta' },
          { text: 'Ja, Hela tiden', value: 'hela tiden' }
        ]}
      />

      <QuestionCard
        name="andning"
        text="Upplever du andningsproblem?"
        options={[
          { text: 'Nej', value: 'nej' },
          { text: 'Ja, jag får andnöd med lätt ansträgning', value: 'lite' },
          { text: 'Ja, jag har andnöd hela tiden', value: 'hela tiden' }
        ]}
      />

      <button className={styles['self-report__submit']} type="submit">
        Spara
      </button>
    </form>
  )
}
