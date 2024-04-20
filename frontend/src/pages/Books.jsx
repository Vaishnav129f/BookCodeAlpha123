import React, { useState, useEffect } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/getBooks"
        );
        setData(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-item-center py-3 ">
        <h4 className="text-white ">Books Section</h4>
      </div>
      {data ? (
        <BooksSection data={data} />
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default Books;

// import React, { useEffect } from "react";
// import axios from "axios";

// const Books = () => {
//   const [first, setFirst] = useState(second);
//   useEffect(() => {
//     const fetch = async () => {
//       await axios
//         .get("http://localhost:1000/api/v1/getbooks")
//         .then((res) => console.log(res));
//     };
//   });
//   return (
//     <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
//       <div className="d-flex justify-content-center align-item-center py-3">
//         <h4 className="text-white ">Books Section</h4>
//       </div>
//     </div>
//   );
// };

// export default Books;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Books = () => {
//   const [books, setBooks] = useState([]); // State for storing books data

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:1000/api/v1/getBooks"
//         );
//         setBooks(response.data.books); // Assuming response.data contains an array of books
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchData(); // Call the fetchData function inside useEffect
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
//       <div className="d-flex justify-content-center align-items-center py-3">
//         <h4 className="text-white">Books Section</h4>{" "}
//       </div>
//     </div>
//   );
// };

// export default Books;
