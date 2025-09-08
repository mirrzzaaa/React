import { useState } from 'react'

function Header({ author }) {
  return (<h1>Belajarr {author ? author : 'WPU'}</h1>);
}

function App() {
  const student = ['sandika', 'dudi', 'cantik'];
  const [likes, setLike] = useState(0);

  function handleClick() {
    setLike(likes + 1);

  }

  return (
    <>
      <Header />
      <Header author="asjd" />

      <ul>
        {
          student.map((student) => (
            <li key={student}>{student}</li>
          ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App
