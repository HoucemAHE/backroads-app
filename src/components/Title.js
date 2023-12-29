import React from 'react'

const Title = ({firstword,secondword}) => {
  return (
    <div className="section-title">
      <h2>{firstword} <span>{secondword}</span></h2>
    </div>
  )
}

export default Title