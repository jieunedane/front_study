// 이름, 나이, 취미를 넣어서 소개글을 완성하시오
// ex) OOO입니다. 나이는 OO살, 취미는 OOO입니다. 를 화면에 출력
import React from 'react';

const Jsx03 = () => {

  const name = "이지은"
  const age = 27
  const hobby = "누워있기"

  return (
    <>
      <h1>{name}입니다. 나이는 {age}살, 취미는 {hobby}입니다.</h1>
    </>
  )
}

export default Jsx03;
