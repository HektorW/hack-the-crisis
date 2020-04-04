import React from 'react'
import { useHistory } from 'react-router-dom'

import QuestionCard from '../QuestionCard'
import PrimaryButton from '../_buttons/PrimaryButton'

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
    <div className="self-report">
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

        <QuestionCard
          name="ork"
          text="Hur är din allmänna ork?"
          options={[
            { text: 'Som vanligt', value: 'som vanligt' },
            {
              text: 'Är trött men orkar vara uppe',
              value: 'trött men orkar vara uppe'
            },
            {
              text: 'Är mest sängliggande men orkar vara uppe korta stunder',
              value: 'sänggliggande, uppe korta stunder'
            },
            {
              text: 'Orkar bara ligga till sängs, men klarar toalettbesök',
              value: 'sängliggande, klarar toalettbesök'
            },
            { text: 'Tar mig inte ur sängen', value: 'tar sig inte ur sängen' }
          ]}
        />

        <QuestionCard
          name="kontakt"
          text="Har du haft nära kontakt med någon som är smittad med coronavirus (covid-19)?"
          options={[
            { text: 'Nej', value: 'nej' },
            { text: 'Ja', value: 'ja' },
            { text: 'Vet ej', value: 'vet ej' }
          ]}
        />

        <div className="self-report__submit-container">
          <PrimaryButton
            className={styles['self-report__submit']}
            type="submit"
          >
            Spara
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}
