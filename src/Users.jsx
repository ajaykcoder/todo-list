import React,{useState,useEffect} from "react";
import axios from "axios";

const Users = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        try{
            const response = await axios.get("http://localhost:7001/users");
            if(response.status === 200){
                setData(response.data)
            }

        }catch(e){
            console.log(e.error);
        }
    }
    return (
        <div>
        {data.map((user) => (
            <div key={user.id}>
                {user.name}<br/>
                {user.email}
                <br/>
                <br/>
            </div>
        ))}
            
        </div>
    );
}
export default Users;