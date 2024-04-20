import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./Home.css";

const Home = () => {
  const image = require("../images/GirlStudy.jpg");

  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE </h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            {" "}
            {/* Changed 'colors' to 'color' */}
            Check out the Books from Here.
          </p>
          <Link to="/books" className="viewBook my-3">
            View Books
          </Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="img-fluid home-img" src={image} alt="/" />

          {/* Use 'image.default' to get the correct image source */}
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import "./Home.css";
// import { colors } from "@material-ui/core";

// const Home = () => {
//   const image = require("../images/GirlStudy.jpg");

//   return (
//     <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-item-center">
//       <div className="row container ">
//         <div
//           className="col-lg-6 d-flex justify-content-center align-item-start flex-column"
//           style={{ height: "91.5vh" }}
//         >
//           <h2 style={{ fontSize: "80px" }}>BOOK STORE </h2>
//           <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
//           <p className="mb-0" style={{ colors: "silver" }}>
//             CheckOut The Books from Here.
//           </p>
//           <Link to="/books" className="viewBook my-3">
//             View Books
//           </Link>
//         </div>
//         <div
//           className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
//           style={{ height: "91.5vh" }}
//         >
//           <img className="img-fluid home-img" src={image} alt="/" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
