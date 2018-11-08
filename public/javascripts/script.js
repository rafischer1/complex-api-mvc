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
        delBtn.className = "delBtn"
        delBtn.setAttribute('data-id', costumes.id)
        delBtn.innerText = "X"
        eachCostume.className = "eachCostume"
        let costumeId = costumes.id
        parent.appendChild(costumesDiv)
        costumesDiv.appendChild(eachCostume)
        eachCostume.innerText += `\n ${costumes.name} ($${costumes.price}) \n\t ${costumes.description}\n`

        delBtn.addEventListener('click', (e) => {
          deleteOne(costumes.id)
          e.target.parentElement.remove()
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
