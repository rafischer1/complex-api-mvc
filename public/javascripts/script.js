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
        eachCostume.className = "eachCostume"
        let costumeId = costumes.id
        parent.appendChild(costumesDiv)
        costumesDiv.appendChild(eachCostume)
        eachCostume.innerText += `\n ${costumes.name} ($${costumes.price}) \n\t ${costumes.description}\n`

        axios.get(`costumes_tags/${costumeId}`)
          .then((color) => {
            console.log(color)
            let colorTag = document.createElement('div')
            colorTag.className = "colorTag"
            eachCostume.appendChild(colorTag)
            colorTag.style.backgroundColor = `#${color.data.split('#')[1]}`
          })

      })
    })
}
