import React,{useState} from "react";

const Todo = () => {
    const [form, setForm] = useState({title: "", description: ""});
    const [todoList, setTodoList] = useState([]);
    const [errors, setErrors] = useState({title: "", description: ""});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSubmitting){
            return;
        }
        if(!validate()){
            return;
        }
        const newTodo = {title: form.title, description: form.description};
        setTodoList([...todoList, newTodo]);
        setForm({title: "", description: "" });
        setIsSubmitting(false);
    };

    const onChange = (e) => {
        const {name, value} = e.target;
        handleCustom(name, value);
    };

    const handleCustom = (name, value) => {
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const validate = () => {
        let newErrors = {};
        if(!form.title || !form.title.trim()){
            newErrors.title = "Required";
        }
        if(!form.description || !form.description.trim()){
            newErrors.description = "Required";
        }
        setErrors(newErrors);
        // Return true when there are no errors
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div style={{ padding: "30px" }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label><br/>
                    <input type="text" name="title" value={form.title} onChange={onChange} />
                    {errors.title && (
                        <div style={{ color: "red", fontSize: "14px" }}>{errors.title}</div>
                    )}
                </div>
                <br/>
                <div>
                    <label htmlFor="">Description</label><br/>
                    <input type="text" name="description" value={form.description} onChange={onChange} />
                    {errors.description && (
                        <div style={{ color: "red", fontSize: "14px" }}>{errors.description}</div>
                    )}
                    <br/><br/>
                </div>
                <button type="submit">Submit</button>
            </form>

            <br/><br/><br/>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {todoList.length > 0 ? (
                        todoList.map((todo, index) => (
                            <tr key={index}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2}>No Data Found</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}
export default Todo;
