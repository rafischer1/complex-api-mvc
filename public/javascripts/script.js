document.addEventListener('DOMContentLoaded', () => {
  getCostumes()
  //end of dom content scope
})

function getCostumes() {
  let parent = document.getElementById('parent')
  let costumesDiv = document.createElement('div')
  costumesDiv.className = "costumes"

  axios.get('/costumes')
    .then((res) => {
      res.data.forEach((costumes) => {
        let eachCostume = document.createElement('div')
        let delBtn = document.createElement('button')
        let editBtn = document.createElement('button')
        editBtn.className = "editOpenBtn"
        editBtn.innerText = "Edit"
        editBtn.setAttribute('costumeId', costumes.id)
        editBtn.setAttribute('data-target', '#modalEdit')
        editBtn.setAttribute('data-toggle', 'modal')
        delBtn.className = "delBtn"
        delBtn.setAttribute('data-id', costumes.id)
        delBtn.innerText = "X"
        eachCostume.className = "eachCostume"
        let costumeId = costumes.id
        parent.appendChild(costumesDiv)
        costumesDiv.appendChild(eachCostume)
        eachCostume.innerText += `\n ${costumes.name} ($${costumes.price}) \n\t ${costumes.description}\n`

        ////////delete\\\\\\\
        delBtn.addEventListener('click', (e) => {
          deleteOne(costumes.id)
          e.target.parentElement.remove()
        })

        ///////edit\\\\\\\
        editBtn.addEventListener('click', (e) => {
          console.log(e.target)
          editOne(costumes.id)
        })

        axios.get(`costumes_tags/${costumes.id}`)
          .then((color) => {
            // console.log(color)
            let colorTag = document.createElement('div')
            colorTag.className = "colorTag"
            eachCostume.appendChild(colorTag)
            eachCostume.appendChild(editBtn)
            eachCostume.appendChild(delBtn)
            colorTag.style.backgroundColor = `#${color.data.split('#')[1]}`
          })

      })
    })
}


/////delete one\\\\\\\
function deleteOne(costume_id) {
  //write better alerts for comfirm on foodseen
  if(confirm('Are you sure you want to delete this costume?')) {
    axios.delete(`/costumes/${costume_id}`)
      .then((res) => {
        console.log(`deleted`)
        alert(`Deleted!`)
      })
      .catch((err) => {
        //better error handling
        console.log(err)
      })
  } else {
    alert('Delete avoided!')
  }
}

///////edit one\\\\\\\\
function editOne(costume_id) {
  axios.get(`costumes/${costume_id}`)
    .then((costume) => {
      let editTitle = document.getElementById('editTitle')
      let formName = document.getElementById('editName')
      let formPrice = document.getElementById('editPrice')
      let formDesc = document.getElementById('editDesc')
      let formTag = document.getElementById('editTag')
      console.log(costume.data)
      editTitle.innerText = costume.data.name
      formName.value = costume.data.name
      formPrice.value = costume.data.price
      formDesc.value = costume.data.description

      //Submit
      let editSubmitBtn = document.getElementById('editSubmitBtn')
      editSubmitBtn.addEventListener('submit', (e) => {
        e.preventDefault()
        let formElements = e.target.elements

        let editData = {}
        if(formElements[0].value) {
          editData.name = formElements[0].value
        }
        if(formElements[1].value) {
          editData.price = formElements[1].value
        }
        if(formElements[2].value) {
          editData.description =
            formElements[2].value
        }
        console.log(editData)
        ////axios put call to update entry\\\\
        axios.patch(`costumes/${costume_id}`, editData)
          .then((response) => {
            if(response) {
              alert(`Update complete!`)
              ////window reload - not a great solution but works!\\\\
              location.reload()
            } else {
              alert(`That didn't work for some reason...`)
            }
          })
          .catch((error) => {
            console.log(error)
          })

        //tags
        // if (formElements[3].value) {
        //   editData.description =
        //     formElements[3].value
        // }
      })
    })
}
