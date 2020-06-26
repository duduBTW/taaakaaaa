import React from 'react'

export default function Teste({ nome, some }) {
  return (
    <div onClick={() => some(2, 2)}>
      {nome} - UwU
    </div>
  )
}
