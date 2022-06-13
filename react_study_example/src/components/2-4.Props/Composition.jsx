import React from 'react'

//rfc 컨트롤 + 스페이스바 아래내용 자동 생성 펀션함수생성
// export default function Composition() {
//   return (
//     <div>Composition</div>
//   )
// }

function Welcome (props){
    return <h1>Hello!{props.name}</h1>
}

export default function Composition() {
  return (
    <div>
        <Welcome name="Jimmy" />
        <Welcome name="Himmy" />
        <Welcome name="Timmy" />
        <Welcome name="Tommy" />
    </div>
  )
}
