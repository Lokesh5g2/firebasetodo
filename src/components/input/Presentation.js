import {React,useState} from 'react'
import {TextField,Button} from '@mui/material'
import { firestore } from '../../firebase/config'
function Presentation() {
    const[input,setInput]=useState('')

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const doc = {todo:input} 
        try{
            await firestore.collection('todo').add(doc)
            setInput('')
        } catch(err){
            console.log(err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Add todo" variant="outlined" value ={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <Button type="submit" variant ="contained" sx={{marginTop:'10px',marginLeft:'10px'}}>Submit</Button>
        </form>
    )
}

export default Presentation
