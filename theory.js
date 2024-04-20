// Update Book by Id
// router.put("/updateBook/:id", async (req, res) => {
//   const id = req.params.id;
//   const { bookname, description, author, image, price } = req.body;
//   try {
//     const updatedBook = await bookModel.findByIdAndUpdate(id, {
//       bookname,
//       description,
//       author,
//       image,
//       price,
//     });
//     res.status(200).json({ message: "Data Updated Successfully", updatedBook });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // DELETE BOOK By ID
// router.delete("/deleteBook/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     await bookModel.findByIdAndDelete(id);
//     res.status(200).json({ message: "Deleted Successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;

// kjnjbjvbdfkjbkjdfgkjb
