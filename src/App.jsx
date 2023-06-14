import './App.css';
import { db } from './firebase/config';
import { collection, getDocs ,addDoc,deleteDoc,doc ,updateDoc} from 'firebase/firestore';

function App() {

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map((doc) => doc.data());
    console.log(products);
  };
  
  const addProduct = async () => {
    const newProduct = {
      name: 'MI',
      price: 150,
      type: 'Mobile',
    };

    try {
      const docRef = await addDoc(collection(db, 'products'), newProduct);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  const deleteProduct = async () => {
    try {
      await deleteDoc(doc(db, 'products', 'gVEgl47N5tsPCevmkEZH'));
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };


  const updateProduct = async () => {
    try {
      const productRef = doc(db, 'products', '26QSghKagbXZjdQnNVYm');
      await updateDoc(productRef, { name: 'M1', price: 200 });
      console.log('Document updated successfully');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };


  return (
    <div>
      <button onClick={getProducts}>get products</button>
      <button onClick={addProduct}>add products</button>
      <button onClick={updateProduct}>Update Products</button>
      <button onClick={deleteProduct}>Delete Product</button>
  

    </div>
  );
}

export default App;



//////single get with id in firebase --------------
// import './App.css';
// import { db } from './firebase/config';
// import { doc, getDoc } from "firebase/firestore";

// function App() {
//   return (
//     <div>
//       <button onClick={() => {
//         getDoc(doc(db, "products", "RiuzWj4IDfZzhfIE49r9")).then((snapshot) => {
//           console.log(snapshot.data());
//         });
//       }}>click</button>
//     </div>
//   );
// }

// export default App;

