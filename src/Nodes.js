export default function Nodes({
                                target,
                                item,

                              }){
  this.item = item
  console.log(item)
  this.element = document.createElement("div")
  this.element.className = "Nodes"

  target.appendChild(this.element)

  this.element.innerHTML=`${this.item.map(v=>{
    return v.type==="DIRECTORY" ? `<img src = "./assets/directory.png">` : `<img src = "./assets/file.png">} `
  })}`
}
