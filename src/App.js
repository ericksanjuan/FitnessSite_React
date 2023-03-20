import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import UserInput from './component/UserInput';

function App() {

  // DD means DropDown
const bodyPartDD = new Set();
const muscleTypeDD = new Set()

const [bodyPart, setBodyPart] = useState('');

useEffect(() => {
    getExercises();

  }, [])

function getExercises () {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb7146dee1mshad319cacdd23b3fp176872jsn034168aaf571',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    .then(response => response.json())
    .then(response => {for(let i = 0; i < response.length; i++) {
      let currentItem = response[i];
      bodyPartDD.add(currentItem.bodyPart);
      muscleTypeDD.add(currentItem.target);
    }})    
    .catch(err => console.error(err));
}


  return (
    <div className="App">
      <Header />
      <UserInput bodyPartDD={bodyPartDD} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
    </div>
  );
}

export default App;
