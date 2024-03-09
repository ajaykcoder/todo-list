import React,{useState} from "react";

const Todo = () => {
    const [form, setForm] = useState({title:"", description: ""});
    const [errors, setErrors] = useState({title:"", description: ""});
    const [isSubmiting, setIsSubmiting] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSubmiting){
            return;
        }
        if(!validate()){
            return;
        }
        console.log(form);
        setForm({title:"", description: ""});
        setIsSubmiting(false);
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        handleCustom(name,value);
    }
    const handleCustom = (name, value) => {
        setForm((prevState) => ({...prevState, [name]: value}));
    }
    const validate = () => {
        let errors = {};
        if(!form.title || !form.title.trim()){
            errors.title = "Required";
        }
        if(!form.description || !form.description.trim()){
            errors.description = "Required";
        }
        setErrors(errors);
        // return true when not have any error
        return Object.keys(errors).length === 0;
    }

    return (
        <div style={{padding:"30px"}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={form.title} onChange={onChange}/>
                    {errors.title && (
                        <div style={{color:"red",fontSize:"14px"}}>{errors.title}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" value={form.description} onChange={onChange}/>
                    {errors.description && (
                        <div style={{color:"red",fontSize:"14px"}}>{errors.description}</div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Todo;