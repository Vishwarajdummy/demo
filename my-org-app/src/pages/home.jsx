import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [count, setCount] = useState(0);
  const [depts, setDepts] = useState([]);
  const deptIdRef = useRef();
  const deptNameRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const getAllDeptQuerySnapshot = await getDocs(collection(db, "Dept"));
      let arr = [];
      getAllDeptQuerySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arr.push(doc.data());
      });
      return arr;
    }
    fetchData().then((data) => {
      setDepts((prevSate) => [...prevSate, ...data]);
      console.log(depts);
    });
  }, [count]);

  const baseRef = collection(db, "Dept");

  const handleDeptAdd = async (e) => {
    e.preventDefault();
    console.log(
      "Dept details are: " +
        deptIdRef.current.value +
        ", " +
        deptNameRef.current.value
    );

    let data = {
      Id: deptIdRef.current.value,
      DeptName: deptNameRef.current.value,
    };

    try {
      addDoc(baseRef, data);
      alert("Successfully added department");
      setCount((prevSate) => prevSate++);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <p>My Org App / Department</p>
        <form onSubmit={handleDeptAdd}>
          <div>
            <label>Dept Id: </label>
            <input
              type="number"
              placeholder="Enter Department Id"
              ref={deptIdRef}
            />
          </div>
          <div>
            <label>Dept Name: </label>
            <input
              type="text"
              placeholder="Enter Department Name"
              ref={deptNameRef}
            />
          </div>
          <div>
            <button type="submit">Add Dept</button>
          </div>
        </form>
      </div>
      <div>
        <p>Departments List</p>
        <ul>
          {depts.length > 0 &&
            depts.map((dept, index) => {
              return <li key={index}>{dept.DeptName}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
