let createSubmitBtn = document.getElementById('createSubmit')

createSubmitBtn.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hi', e.target)
})
//     e.preventDefault()
//     console.log('hi', e.target.value)
    // grab all values from the form
    
    // // 
    // let newCostumeName = e.target.elements[0].value
    // let newCostumePrice = e.target.elements[1].value
    // let newCostumeDesc = e.target.elements[2].value
    // 
    // let newPostObj = {
    //   name: newCostumeName,
    //   price: newCostumePrice,
    //   description: newCostumeDesc,
    // }
    // 
    // console.log("new post object:", newPostObj)
    // axios.post('/costumes', newPostObj)
    //   .then((res) => {
    //     console.log('in the post route')
    //     costume_id = res.data
    //   })
    //   .then(() => {
    //     //tags to be dealt with here
    //     //deal with tag tagsArray
    //     let newTags = e.target.elements[3].value
    //     let newTagsArr = newTags.split(`, `)
    //     let convertedTagsArr = []
    // 
    //     for(var i = 0; i < newTagsArr.length; i++) {
    //       if(newTagsArr[i] === "25% off") {
    //         convertedTagsArr.push(1)
    //       }
    //       if(newTagsArr[i] === "2018 Exc") {
    //         convertedTagsArr.push(2)
    //       }
    //       if(newTagsArr[i] === "Default") {
    //         convertedTagsArr.push(3)
    //       }
    //       if(newTagsArr[i] === "Bargain") {
    //         convertedTagsArr.push(4)
    //       }
    //     }
    // 
    //     //build up each post body using the converted tag array
    //     convertedTagsArr.forEach(tag => {
    //       let tagPostBody = {
    //         post_id: post_id,
    //         tag_id: tag
    //       }
    //       axios.post('https://food-seen.herokuapp.com/posts_tags', tagPostBody)
    //         .then((res) => {
    //           console.log('in the posts_tags route')
    //           return res
    //         })
    //     })
    //   })
    //   .catch((err) => {
    //     let messageText = `Create post error - please try again (${err})`
    //     errorMessageFunction(messageText)
    //   })
    // setTimeout(() => {
    //   successMessage.style.display = "inline"
    // }, 500)
    // successMessage.style.animation = "fade-out 5s linear 1 forwards"
    // getPosts()
  // })
