import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';

function Header() {
  return (
    <div className="header">
      <Wrapper>
        <Left>
          <MenuIcon className="menu-icon"/>
          <img className="youtube-logo" alt="img" src="/Images/ytb-logo.svg"></img>
        </Left>

        <Mid>
          <input className="search-bar" type="text" placeholder="Search"></input>
          <SearchIcon className="search-icon" />
          <div className="search-icon-label">Search</div>
        </Mid>
  
        <Mic>
        <MicIcon className="mic-icon" />
        <div className="mic-hover-label">Search with your voice</div>
        </Mic>
        
       
        <Right>
          <MoreVertIcon className="setting-icon" />
          <div className="setting-label">Setting</div>
          {/* <AccountCircleIcon className="sign-in-person"/> */}
          <button>Sign in </button>
        </Right>

      </Wrapper>
    </div>
  )
}

export default Header

// HEADER 
const Wrapper = styled.div`
width:100%;
color : white;
display : flex;
flex-direction:row;
position:fixed;
z-index:5;
`

// LEFT 
const Left = styled.div`
  margin-top:15px;
  margin-left:25px;

  .menu-icon{
    padding:1px;
  }

  .menu-icon:hover{
    background-color:#222222;
    cursor:pointer;
    border-radius:100px;
  }

  .youtube-logo{
    padding-left:25px;
  }

`


// MIDDLE 
const Mid = styled.div`
  margin-top:10px;
  margin-left:150px;

  .search-bar{
     color:white;
     width:560px;
     height:40px;
     border:0.1px solid grey;
     border-color:1px solid grey;
     border-top-left-radius:45px;
     border-bottom-left-radius:45px;
  }
  
  .search-bar::placeholder{
    font-size:17px;
    padding:15px;
  }
  
  .search-icon{
    width:55px;
    height:42px;
    border:0.1px solid grey;
    border-top-right-radius:45px;
    border-bottom-right-radius:45px;
    background-color:#222222;
    position:absolute;
  }
  .search-icon:hover{
    cursor:pointer;
  }

  .search-icon-label{
    position:absolute;
    display:none;
    font-size:15px;
    width:50px;
    padding:5px;
    text-align:center;
    background-color:grey;
    border-radius:5px;
    margin-left:565px;
    margin-top:20px;

  }
  
  .search-icon:hover + .search-icon-label{
    display:block;
    color:white;
    
  }

`

// MIC
const Mic=styled.div `
.mic-icon{
   position:absolute; 
   height:18px; 
   width:20px;
   padding:12px;
   margin-left:70px;
   margin-top:11px;
   background-color:#181818;
   border-radius:100px;
  }

  .mic-icon:hover{
    background-color:#222222;
    cursor:pointer;
  }

  .mic-hover-label{
  position:absolute;
  display:none;
  font-size:15px;
  color:white;
  width:150px;
  text-align:center;
  padding:5px;
  margin-top:65px;
  background-color:grey;
  border-radius:5px;
  
  }

  .mic-icon:hover + .mic-hover-label{
   display:block;
   ${'' /* opacity:0.7; */}
  }
`


// RIGHT 
const Right = styled.div`
margin-left:230px;
margin-top:15px;

.setting-icon{
  position:absolute;
  margin-top:05px;
  z-index:1;
  padding:1px;
}

.setting-icon:hover{
    background-color:#222222;
    cursor:pointer;
    border-radius:100px;
}

.setting-label{
  position:absolute;
  display:none;
  font-size:15px;
  color:white;
  width:60px;
  text-align:center;
  padding:5px;
  margin-top:48px;
  background-color:grey;
  border-radius:5px;
  
}

.setting-icon:hover + .setting-label{
  display:block;
  ${'' /* opacity:0.7; */}
}

${'' /* .sign-in-person{
  color:#3ea6ff;
} */}

button{
  position:absolute;
  margin-left:45px;
  color:#3ea6ff;
  height:35px;
  width:100px;
  text-align: center;
  font-size: 16px;
  border:0.5px solid grey;
  border-radius:50px;
}

button:hover{
    background-color:#222222;
    cursor:pointer;
  }
`