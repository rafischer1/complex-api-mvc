document.addEventListener('DOMContentLoaded', () => {
  getCostumes()
  //end of dom content scope
})



function getCostumes() {
  let parent = document.getElementById('parent')
  let costumesDiv = document.createElement('div')
  axios.get('/costumes')
    .then((res) => {
      // handle success
      console.log('in the get route:', res.data)
      res.data.forEach((costumes) => {
        // var tagCostumeId = costumes.id
        parent.appendChild(costumesDiv)
        console.log(costumes)
        costumesDiv.innerText += `\n ${costumes.name} ($${costumes.price}) \n\t ${costumes.description}\n`
      })
    })
}
