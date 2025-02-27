const name = 'John';
const date = new Date();
const Greeting = () => {
  return (
      <div>
        <h1>Welcome, {name}</h1>
        <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting