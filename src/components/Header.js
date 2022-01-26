import React, { useState } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';



const Header=(props)=>{

    const {value, onClickSubmit, onInputChange}=props;

    // const [data, setdata]=useState("");

    // const onInput=(e)=>{
    //     const inputData=e.target.value;
    //     setdata(inputData);
    //     // onInputChange(data);
    // }

    // onInputChange(data);

    return(
        <>
        <nav className='nav-bar'>
            <div className='container-nav'>
                <h1><FastfoodIcon style={{fontSize:'85px', marginRight: '10px'}} />Food Recipe</h1>
                <form>
                    <input type="text" value={value} onChange={(event)=>{
                        onInputChange(event.target.value);
                    }} />
                    <button onClick={onClickSubmit}>Search Recipe</button>
                </form>
            </div>
        </nav>
        </>
    )
}

export default Header;