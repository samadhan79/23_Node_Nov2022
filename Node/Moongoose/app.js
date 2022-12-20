const mongoose = require('./connect')
const User = require('./Model/User')

// const AllUser = async () => {
//     const result = await User.find()
//     console.log(result)
// }
// AllUser()

//Save
// const SaveUser = async () => {
//     const data = { name: 'krupali', email: 'krupali@gmail.com', address: 'baroda' }
//     const user = await new User(data)
//     user.save()
//     console.log('Inserted Success...')
// }
// SaveUser()

//Delete

// const DeleteUser = async ()=>{
//     id = "63a183f6d7356c341e7345c2"
//     const user = await User.findByIdAndDelete(id)
//     console.log("Deleted...");

// }
// DeleteUser()


const UpdateUser = async () =>{
  const id = "63a033fc9652e08aa3e17f30"
  const data = {name:'khushal'}
  const user = await User.findByIdAndUpdate(id,data)
  console.log("Updated.....");
}

UpdateUser()



