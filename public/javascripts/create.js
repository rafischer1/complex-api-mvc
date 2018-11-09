let createSubmitBtn = document.getElementById('createSubmit')

createSubmitBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hi', e.target.value)
    let newCostumeName = e.target.elements[0].value
    let newCostumePrice = e.target.elements[1].value
    let newCostumeDesc = e.target.elements[2].value

    let newPostObj = {
      name: newCostumeName,
      price: newCostumePrice,
      description: newCostumeDesc,
    }

    console.log("new post object:", newPostObj)
    axios.post('/costumes', newPostObj)
      .then((res) => {
        console.log('in the post route id:', res.data.id)
        costume_id = res.data.id
      })
      .then(() => {
        //tags to be dealt with here
        //deal with tag tagsArray
        let newTag = e.target.elements[3].value

        let newTagData = {
          tag_id: newTag,
          costume_id: costume_id
        }

        axios.post('/costumes_tags', newTagData)
          .then((res) => {
            console.log('int eh tags', newTagData)
            console.log('in the costumes_tags route')
            return res
            
          })
          setTimeout(() => { 
            alert("Costume Created"); 
            setTimeout(() => { 
              location.reload()   
            }, 500);
          }, 1000);
          
      })
      .catch((err) => {
      console.log(err)
      })
  })
