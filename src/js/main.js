import SearchInput from './SearchInput'
import {fetchLanguages} from "./api.js";
import Suggestion from "./Suggestion";

export default function main(${target}){
  this.state = {
    fetchLanguages : [],
    seletedLanguages : [],
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextStete
    }
    suggestion.setState({
      items: this.state.fetchLanguages
    })
  }

  const searchInput = new SearchInput({
    $target,
    initialState : '',
    onChange : async(keyword)=>{
      if(keyword.length === 0){
        this.setState({fetchLanguages:[],})
      }else {
        const languages = await fetchLanguages(keyword)
        this.setState(({
          fetchedLanguages: languages
        }))
      }
    },
  })

  const suggestion = new Suggestion({
    $target,
    initialState : {
      items : []
    }
  })
// initialState에는 뭔값? async await
}
