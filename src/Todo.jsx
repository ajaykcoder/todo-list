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
        <div className="flex items-center justify-center h-lvh p-10 bg-[url('https://www.icloud.com/system/icloud.com/current/wallpaper.webp')]">
            <div className="bg-teal-300 p-16 rounded-3xl size-full flex bg-blur backdrop-blur-lg">
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center">
                    <h1 className="text-darkBlack font-bold">Todo List</h1>
                    <div className="mb-4">
                        <label className="text-base mb-1 flex">Title</label>
                        <input className="border border-white bg-transparent h-10 w-full focus:outline-none px-4 backdrop-blur-lg text-white rounded-md" type="text" name="title" value={form.title} onChange={onChange}/>
                        {errors.title && (
                            <div className="text-red text-sm mt-1">{errors.title}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="text-base mb-1 flex">Description</label>
                        <input className="border border-white bg-transparent h-10 w-full focus:outline-none px-4 backdrop-blur-lg text-white rounded-md" type="text" name="description" value={form.description} onChange={onChange}/>
                        {errors.description && (
                            <div className="text-red text-sm mt-1">{errors.description}</div>
                        )}
                    </div>
                    <div>
                        <button className="bg-darkBlack hover:bg-black text-base h-10 px-4 rounded-md text-white" type="submit">Submit</button>
                    </div>
                </form>
                <div className="w-3/5">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.length > 0 ? (
                                todoList.map((todo, index) => (
                                    <tr key={index}>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>
                                            <div>
                                                <button><svg viewBox="0 0 24 24" width="20" height="20"><path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"/><path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"/></svg></button>
                                                <button><svg viewBox="0 0 512 512" width="20" height="20"><g><path d="M448,85.333h-66.133C371.66,35.703,328.002,0.064,277.333,0h-42.667c-50.669,0.064-94.327,35.703-104.533,85.333H64 c-11.782,0-21.333,9.551-21.333,21.333S52.218,128,64,128h21.333v277.333C85.404,464.214,133.119,511.93,192,512h128 c58.881-0.07,106.596-47.786,106.667-106.667V128H448c11.782,0,21.333-9.551,21.333-21.333S459.782,85.333,448,85.333z M234.667,362.667c0,11.782-9.551,21.333-21.333,21.333C201.551,384,192,374.449,192,362.667v-128 c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333V362.667z M320,362.667 c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333v-128c0-11.782,9.551-21.333,21.333-21.333 c11.782,0,21.333,9.551,21.333,21.333V362.667z M174.315,85.333c9.074-25.551,33.238-42.634,60.352-42.667h42.667 c27.114,0.033,51.278,17.116,60.352,42.667H174.315z"/></g></svg></button>
                                            </div>
                                        </td>
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
