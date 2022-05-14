
const request = async(url)=>{

  const res = await fetch(url)

  if(res.ok){
    const json = res.json()
    console.log(json)
    return json
  }

  throw new Error("Fetch Error")
}

export const DIR_END_POINT = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/"


export const fetchDir= async (nodeId) => {
  console.log(DIR_END_POINT + nodeId);
  return await request(DIR_END_POINT + nodeId)
}
