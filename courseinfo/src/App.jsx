const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div className="Content">
      {props.parts.map((part) => <Part part={part}/>)}
    </div>
  )
}

const Part = (props) => {
  return (
    <div className="Part">
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div className="Total">
      <p>Number of exercises {props.parts.reduce((total, object) => object.exercises + total, 0)}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App