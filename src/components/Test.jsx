import { useState, React } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './Firebase';

const Test = () => {
  const [newTest, setNewTest] = useState('');
  const usersCollectionRef = collection(db, 'test_data');

  const createTest = async () => {
    await addDoc(usersCollectionRef, { test: newTest });
  };

  return (
    <div className="container">
      <input type="text" placeholder="Type your test name" onChange={(event) => setNewTest(event.target.value)} />
      <button type="button" onClick={createTest}>Add</button>
    </div>
  );
};

export default Test;
