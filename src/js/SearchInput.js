export default function SearchInput({
  $target,// 값 얘기하는거?
  initialState,
  onChange,
}){
  this.$element = document.createElement('form')
  this.$element.className = "SearchInput"
  this.state = initialState

  $target.appendChild(this.$element)
  //왜 위에서 안넣고 render안에 넣음?
  this.render = () => {
    this.$element.innerHTML = '' +
      '<input class = "SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요."' +
      ' value = "${this.state}>'
  }
  //위에 적고 왜 또 적음?
  this.render()
  //this.$element 는 뭐지?
  this.$element.addEventListener('keyup',(e)=>{
    onChange(e.target.value)
  })
}
