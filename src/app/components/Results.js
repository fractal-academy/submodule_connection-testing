import React from 'react'
import { useHistory, generatePath, useParams } from 'react-router-dom'
import { ROUTES_PATHS } from '../constants'
import firebase from '../services/Firebase'
import { FormAnswers } from 'feedback-typeform-app/src'

function Results() {
  // [ADDITIONAL HOOKS]
  const history = useHistory()
  const { id } = useParams()

  // [CLEAR_FUNCTIONS]
  const onFormShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_SHOW, { id })
    history.push(path)
  }

  const onFormResultsShow = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_ANSWERS, { id })
    history.push(path)
  }
  const onFormItemClick = (id) => {
    const path = generatePath(ROUTES_PATHS.FORM_EDIT, { id })
    history.push(path)
  }

  const t = (txt) => txt

  return (
    <FormAnswers
      id={id}
      translate={t}
      firebase={firebase}
      actions={{
        onFormShow: onFormShow,
        onFormResultsShow: onFormResultsShow,
        onFormItemClick: onFormItemClick
      }}
    />
  )
}

export default Results