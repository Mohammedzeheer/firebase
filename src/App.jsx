import './App.css';
import { db } from './firebase/config';
import { doc, getDoc } from "firebase/firestore";

function App() {
  return (
    <div>
      <button onClick={() => {
        getDoc(doc(db, "products", "RiuzWj4IDfZzhfIE49r9")).then((snapshot) => {
          console.log(snapshot.data());
        });
      }}>click</button>
    </div>
  );
}

export default App;

