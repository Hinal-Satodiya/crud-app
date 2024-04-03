import { useEffect } from "react";
const getUser = "http://localhost:5000/api/all";

const App = () => {

  const fetchUsers = async(url) => {
       try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data)
       }catch(e){
         console.error(e);
       }
  }
  useEffect( () => {
    fetchUsers(getUser);
  }, [])
  return<>
  <h1>Employee Table</h1>
  </>
}
export default App;