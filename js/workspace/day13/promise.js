const promise = new Promise((resolve, reject) => {
  check = true
  if(check) {
    resolve("성공")
  } else {
    reject("실패")
  }
})

// promise
//   .then((result) => {
//     console.log(result)
//   }) // 성공하면 
//   .catch((err) => {
//     console.error(err)
//   }) // 실패하면

  console.log(promise)