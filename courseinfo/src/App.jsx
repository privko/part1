const Header = ({course}) => {
  return (
    <div className="Header">
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div className="Content">
      {parts.map((part) => <Part part={part}/>)}
    </div>
  )
}

const Part = ({part}) => {
  return (
    <div className="Part">
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}


const Total = ({parts}) => {
  return (
    <div className="Total">
      <p>Number of exercises {parts.reduce((total, object) => object.exercises + total, 0)}</p>
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