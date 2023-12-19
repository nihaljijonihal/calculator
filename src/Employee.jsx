import Company from "./Company"
import styles from "./style.module.css"
function Employee(props){
    console.log(props);
    const handleAdd = ()=>{
        alert("Add Button clicked")
    }
    const addUserName =(uname)=>{
        alert(`Use name is : ${uname}`)
    }

return (


    <>
    <h1 className={styles.bg}>Employee Component : {props.username}</h1>
    <Company empStatus='true'/>
    <button onClick={handleAdd} style={{padding:'10px', backgroundColor:'blue',color:'white',borderRadius:'10px',fontSize:'30px'}}>Add</button>

    <button onClick={()=>addUserName("Max")} style={{padding:'10px', backgroundColor:'blue',color:'white',borderRadius:'10px',fontSize:'30px'}}>Add with user</button>
    </>
)

}

export default Employee