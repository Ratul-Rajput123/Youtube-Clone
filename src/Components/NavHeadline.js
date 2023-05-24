import React from 'react'
import styled from 'styled-components';

function NavHeadline() {
    return (
        <div>
        <Wrapper>
            <p className="text-control ll">All</p>
            <p className="text-control">Comedy</p>
            <p className="text-control">Music</p>
            <p className="text-control">News</p>
            <p className="text-control">Sport</p>
            <p className="text-control">Programming</p>
            <p className="text-control">Computer</p>
            <p className="text-control">Podcast</p>
            <p className="text-control">Satsang</p>
            <p className="text-control">Study</p>
            <p className="text-control">Dance</p>
            <p className="text-control">Rapping</p>
            <p className="text-control">Gym</p>
            <p className="text-control">Mixes</p>
            {/* <p class="text-control">Trending</p> */}
            <p className="text-control">Recently uploaded</p>
       </Wrapper>    
        </div>
    )
}

export default NavHeadline;

const Wrapper = styled.div `
   position:fixed;
   display:flex;
   flex-direction:row;
   margin-left:6.5%;
   margin-top:50px;
   padding-top:13px;
   z-index:1;

  .text-control{
      font-size:15px;
      text-align:center;
      width:auto;
      height:20px;
      color:white;
      background-color:#272727;
      padding:8px;
      border-radius:8px;
      font-family:'Roboto',sans-serif;
      margin-left:10px;
  }

  .text-control:hover{
    cursor:pointer;
    background-color:grey;
    padding:5px;

  }
`