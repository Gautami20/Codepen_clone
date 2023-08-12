// import React from 'react'
import { useState } from 'react';
import {Box,styled}  from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// use this insted of legacy peers:-npm install react-codemirror2 codemirror --save --force
//there are two types controlled(if value prop of form tag is controlled by react through usestate) and uncontrolled types of components in react
//here value prop to be accessed globally thus using context
import {Controlled as CodeMirror} from 'react-codemirror2';
import '../App.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding:0 8px 8px;
`
const Heading = styled(Box)`
    background: #1d1e22;
    display:flex;
    padding: 9px 12px;
`;
const Header = styled(Box)`
    display:flex;
    background: #060606;
    color:#AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = ({heading,icon,color,value,onChange}) => {

    const[open,setOpen]= useState(true);

    const handleChange = (editor,data,value)  => {
        onChange(value);
    }
  return (
    <Container style={open ? null : {flexGrow: 0}}>
        <Header>
            <Heading>
                <Box 
                    component="span"
                    style={
                    {   background:color,
                        height:20,
                        width:20,
                        display:'flex',
                        placeContent:'center',
                        borderRadius:5,
                        marginRight:5,
                        paddingBottom:2,
                        color: "#000"
                    }}>{icon}</Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon
                fontSize='small'
                style={{alignSelf: 'center'}}
                onClick={()=>setOpen(prevState => !prevState)}
            />
        </Header>

        {/* this can take props 'options' in object format{} */}
        <CodeMirror
            //controlled-editor is property class to get default properties for this imported codemirror and in 
            //this if we inspecte right below this class is CodeMirror class subpart of this which is targeted through app.css
            className='controlled-editor' 
            value={value}
            onBeforeChange={handleChange}
            options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true
              }}     
        />
    </Container>
  )
}

export default Editor