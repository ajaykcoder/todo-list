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
        <div className="flex items-center justify-center h-lvh p-10">
            <div className="bg-teal-300 p-16 rounded-3xl size-full flex">
                <form onSubmit={handleSubmit} className="flex-1">
                    <div>
                        <label htmlFor="">Title</label><br/>
                        <input type="text" name="title" value={form.title} onChange={onChange}/>
                        {errors.title && (
                            <div style={{ color: "red", fontSize: "14px" }}>{errors.title}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="">Description</label><br/>
                        <input type="text" name="description" value={form.description} onChange={onChange}/>
                        {errors.description && (
                            <div style={{ color: "red", fontSize: "14px" }}>{errors.description}</div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="w-3/5">
                    <table className="w-full">
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
            </div>

        </div>
    );
}
export default Todo;
