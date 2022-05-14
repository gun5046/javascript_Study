import Breadcrumb from "./Breadcrumb.js"
import ImageView from "./ImageView.js"
import Nodes from "./Nodes.js"
import {fetchDir} from "./Api.js"

export default function App(target){
  this.state = {
    nowDirectory : [
    ],
    nodeId : "",
    item : {
      id : "",
      name : "",
      type : "",
      filepath : "",
      parent : "",
    }
  }
  this.setState = (nextState)=>{
    this.state = {
      ...this.state,
      ...this.nextState
    }

  }

  const breadcrumb = new Breadcrumb({
    target : target,
    nDirectory : this.state.nowDirectory,
    nid : this.state.nodeId,
    fetchDir  : async (dir) =>{
      const fetch = await fetchDir(dir)
      this.setState({
        item : fetch,
      })
    }
  })

  const nodes = new Nodes({
    target: target,
    item : this.state.item,
  })


}
