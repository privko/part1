import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr className="StatiscticLine">
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const sum = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / sum
  const positive = `${props.good / sum * 100} %`

  return (
    <div className="Statisctics">
      <h1>statistics</h1>
      <table>
        <thead></thead>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [infoGathered, setInfoGathered] = useState(false)


  function incrementGood() {
    setInfoGathered(true)
    setGood(good + 1)
  }

  function incrementNeutral() {
    setInfoGathered(true)
    setNeutral(neutral + 1)
  }

  function incrementBad() {
    setInfoGathered(true)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      {infoGathered ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>}
    </div>
  )
}

export default App