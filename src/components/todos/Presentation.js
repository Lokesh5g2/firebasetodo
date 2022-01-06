import {React,useEffect,useState } from 'react'
import {firestore} from '../../firebase/config'
import TodoList from '../todoList/Presentation'
function Presentation() {
    
    const [data,setData]=useState([])
    const [isPending,setIsPending]=useState(false)
    const [error,setError]=useState(false)
    useEffect(() => {
       setIsPending(true)
      firestore.collection('todo').onSnapshot((snapshot)=> {
            if(snapshot.empty){
                setError('Not loaded')
                setIsPending(false)
            }
            else{
                let result=[]
                snapshot.docs.forEach(doc=> {
                    result.push({id:doc.id,...doc.data()})
                })
                setData(result)
                setIsPending(false)
                console.log(result)
            }
       })
    }, [])
    console.log(data)
    return (
       // <TodoList/>
       
       data.map((data)=>{
           return(<TodoList data={data}/>)
       })
    )
}

export default Presentation
