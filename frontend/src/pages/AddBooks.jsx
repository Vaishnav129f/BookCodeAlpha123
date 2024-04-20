import React, { useState } from "react";
import axios from "axios";
const AddBooks = () => {
  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/add", formData)
      .then((res) => alert("Book added successfully"));
    setFormData({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="booknameInput" className="form-label text-white">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="booknameInput"
            placeholder="Enter Book Name"
            name="bookname"
            value={formData.bookname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="authorInput" className="form-label text-white">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="authorInput"
            placeholder="Enter The Name Of Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionInput"
            placeholder="Enter Description Of The Book"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="imageInput"
            placeholder="Enter The URL Of The Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceInput" className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="priceInput"
            placeholder="Enter The Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;

// import React, { useState } from "react";

// const AddBooks = () => {
//   // Define state variables for each input field
//   const [bookname, setBookname] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [price, setPrice] = useState("");

//   // Define the change handler function
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Update the corresponding state variable based on the input field's name
//     switch (name) {
//       case "bookname":
//         setBookname(value);
//         break;
//       case "author":
//         setAuthor(value);
//         break;
//       case "description":
//         setDescription(value);
//         break;
//       case "image":
//         setImage(value);
//         break;
//       case "price":
//         setPrice(value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div
//       className="bg-dark d-flex justify-content-center align-item-center"
//       style={{ minHeight: "91.5vh" }}
//     >
//       <div className="container  p-4">
//         <div className="mb-3 container">
//           <label htmlFor="booknameInput" className="form-label text-white">
//             Book Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="booknameInput"
//             placeholder="Enter Book Name"
//             name="bookname"
//             value={bookname}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3 container">
//           <label htmlFor="authorInput" className="form-label text-white">
//             Author
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="authorInput"
//             placeholder="Enter The Name Of Author"
//             name="author"
//             value={author}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3 container">
//           <label htmlFor="descriptionInput" className="form-label text-white">
//             Description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="descriptionInput"
//             placeholder="Enter Description of the book"
//             name="description"
//             value={description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3 container">
//           <label htmlFor="imageInput" className="form-label text-white">
//             Image
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="imageInput"
//             placeholder="Enter The Url of the Image"
//             name="image"
//             value={image}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3 container">
//           <label htmlFor="priceInput" className="form-label text-white">
//             Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="priceInput"
//             placeholder="Enter The Price"
//             name="price"
//             value={price}
//             onChange={handleChange}
//           />
//         </div>
//         <button className="btn btn-success">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default AddBooks;

// // import React from "react";

// // const AddBooks = () => {
// //   return (
// //     <div
// //       className="bg-dark d-flex justify-content-center align-item-center"
// //       style={{ minHeight: "91.5vh" }}
// //     >
// //       <div className="container  p-4">
// //         <div className="mb-3 container">
// //           <label
// //             for="exampleFormControlInput1"
// //             className="form-label text-white"
// //           >
// //             Book Name
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="exampleFormControlInput1"
// //             placeholder="Enter Book Name"
// //             name="bookname"
// //           />
// //         </div>
// //         <div className="mb-3 container">
// //           <label
// //             for="exampleFormControlInput1"
// //             className="form-label text-white"
// //           >
// //             Author
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="exampleFormControlInput1"
// //             placeholder="Enter The Name Of Author"
// //             name="author"
// //           />
// //         </div>
// //         <div className="mb-3 container">
// //           <label
// //             for="exampleFormControlInput1"
// //             className="form-label text-white"
// //           >
// //             Description
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="exampleFormControlInput1"
// //             placeholder="Enter Description of the book"
// //             name="description"
// //           />
// //         </div>
// //         <div className="mb-3 container">
// //           <label
// //             for="exampleFormControlInput1"
// //             className="form-label text-white"
// //           >
// //             Image
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="exampleFormControlInput1"
// //             placeholder="Enter The Url of the Image"
// //             name="image"
// //           />
// //         </div>
// //         <div className="mb-3 container">
// //           <label
// //             for="exampleFormControlInput1"
// //             className="form-label text-white"
// //           >
// //             Price
// //           </label>
// //           <input
// //             type="number"
// //             className="form-control"
// //             id="exampleFormControlInput1"
// //             placeholder="Enter The Price"
// //             name="price"
// //           />
// //         </div>
// //         <button className="btn btn-success">Submit</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddBooks;
