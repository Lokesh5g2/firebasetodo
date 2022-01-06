import {React,useState} from 'react'
import {List,Card} from '@mui/material';
import {ListItem,TextField,Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import { firestore } from '../../firebase/config';
function Presentation({data}) {
    const [edit,setEdit] = useState(false)
    const [initial,setInitial] = useState('')
    const handleDelete = (id)=>{
        firestore.collection('todo').doc(id).delete();
    }
    const handleEdit = (data) =>{
        setEdit(true)
        setInitial(data.todo)
    }
    const handleSubmit = (value)=>{
        firestore.collection('todo').doc(data.id).update({todo:initial})
    }
    return (
        <div>
        <List style={{width:'80%',maxWidth:'350px'}}>
                <Card sx={{padding:'10px'}}>
                {edit?<ListItem disablePadding>
                    <form onSubmit={()=>handleSubmit(initial)}>
                    <TextField value={initial} onChange={(e)=>{setInitial(e.target.value)}}/>
                    <Button variant='contained'sx={{marginLeft:'10px',marginTop:'10px'}} type='submit'>Save</Button>
                    </form>
                </ListItem>:
                <ListItem disablePadding>
                  <ListItemText primary={data.todo}/>
                  <ListItemIcon> <EditIcon onClick={()=>handleEdit(data)}/></ListItemIcon>
                  <ListItemIcon> <DeleteIcon onClick={()=>handleDelete(data.id)}/></ListItemIcon>
                </ListItem>}
                
                </Card>
              </List>
        </div>
    )
}

export default Presentation
