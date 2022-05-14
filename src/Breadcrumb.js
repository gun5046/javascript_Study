export default function Breadcrumb({
                                     target,
                                     nDirectory,
                                     nid,
                                     fetchDir,
                                   }){
  this.dir = ["root"]
  nDirectory.map(v=>(
    this.dir.push(v)
  ))
  this.nodeId = nid
  this.element = document.createElement("nav")
  this.element.className="Breadcrumb"

  target.appendChild(this.element)

  fetchDir(this.nodeId)

  this.render = ()=>{

    this.element.innerHTML = `${this.dir.map((v)=>{
      return `<div>${v}</div>`
    }).join(" - ")}`
  }

  this.render()
}
