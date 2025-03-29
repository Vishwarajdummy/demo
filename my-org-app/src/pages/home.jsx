import React, { useRef } from "react";

export default function Home() {
  const deptIdRef = useRef();
  const deptNameRef = useRef();

  const handleDeptAdd = async (e) => {
    e.preventDefault();
    console.log(
      "Dept details: " +
        deptIdRef.current.value +
        ", " +
        deptNameRef.current.value
    );
  };

  return (
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
  );
}
