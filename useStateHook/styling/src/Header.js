import React from 'react'

const Header = ({title}) => {

  
  //*******Saving inline style in variable */ 
  // const headerStyle = {
  //   background: "royalblue",
  //   color: "goldenrod",
  //   fontSize: "30px"
  // }

  return (
    <header>
      <h1>{title}</h1>
    </header>

   //*****Using variable in inline styling*****//
    // <header style={headerStyle}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>

    // Direct Inline styling
    // <header style={{background: "blue", color: "red", fontSize: '12px'}}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>
  )
}

export default Header