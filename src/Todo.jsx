import React,{useState} from "react";

const Todo = () => {
    const [form, setForm] = useState({title: "", description: ""});
    const [todoList, setTodoList] = useState([]);
    const [errors, setErrors] = useState({title: "", description: ""});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const onChange = (e) => {
        const {name, value} = e.target;
        handleCustom(name, value);
    };
    const handleCustom = (name, value) => {
        setForm((prevState) => ({...prevState, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSubmitting){
            return;
        }
        if(!validate()){
            return;
        }
        if(editIndex !== null){
            const updatedTodoList = [...todoList];
            updatedTodoList[editIndex] = {title: form.title, description: form.description};
            setTodoList(updatedTodoList);
            setEditIndex(null);
        }else{
            const newTodo = {title: form.title, description: form.description};
            setTodoList([...todoList, newTodo]);
        }
        setForm({title: "", description: ""});
        setIsSubmitting(false);
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
    const handleEdit = (index) => {
        const todoToEdit = todoList[index];
        setForm(todoToEdit);
        setEditIndex(index);
    };
    const handleDelete = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
        setForm({title: "", description: ""});
    };

    return (
        <div className="flex items-center justify-center h-lvh p-10 bg-[url('https://www.icloud.com/system/icloud.com/current/wallpaper.webp')] bg-no-repeat bg-cover">
            <div className="bg-teal-300 p-16 rounded-3xl size-full bg-blur backdrop-blur-lg flex gap-x-8">
                <form onSubmit={handleSubmit} className="w-[40%] flex flex-col justify-center">
                    <h1 className="text-black font-bold text-4xl text-center">Todo List</h1>
                    <div className="mb-4">
                        <label className="text-base mb-1 flex">Title</label>
                        <input className="border border-white bg-transparent h-10 w-full focus:outline-none px-4 backdrop-blur-lg text-white rounded-md" type="text" name="title" value={form.title} onChange={onChange}/>
                        {errors.title && (
                            <div className="text-red text-sm mt-1">{errors.title}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="text-base mb-1 flex">Description</label>
                        <textarea className="border border-white bg-transparent h-28 w-full focus:outline-none p-4 backdrop-blur-lg text-white rounded-md resize-none" name="description" value={form.description} onChange={onChange}/>
                        {errors.description && (
                            <div className="text-red text-sm mt-1">{errors.description}</div>
                        )}
                    </div>
                    <div>
                        <button className="bg-darkBlack hover:bg-black text-base h-10 px-4 rounded-md text-white" type="submit">Submit</button>
                    </div>
                </form>
                <div className="w-[60%] mt-[18%]">
                    <div class="relative overflow-x-auto shadow-md rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                            <thead class="text-xs text-[#9CA3AF] uppercase bg-[#374151]">
                                <tr>
                                    <th scope="col" class="px-6 py-3">SR No.</th>
                                    <th scope="col" class="px-6 py-3">Title</th>
                                    <th scope="col" class="px-6 py-3">Description</th>
                                    <th scope="col" class="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoList.length > 0 ? (
                                    todoList.map((todo, index) => (
                                        <tr key={index} class="bg-[#1F2937] border-b">
                                            <th class="px-6 py-4 font-medium text-white whitespace-nowrap">{index + 1}</th>
                                            <th class="px-6 py-4 font-medium text-white whitespace-nowrap">{todo.title}</th>
                                            <td class="px-6 py-4 font-medium text-white whitespace-nowrap">{todo.description}</td>
                                            <td class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                                <div className="flex gap-x-2">
                                                    <button onClick={() => handleEdit(index)} className="w-7 h-7 bg-[#007df5] hover:bg-[#059cf2] flex items-center justify-center rounded"><svg className="fill-white" viewBox="0 0 24 24" width="14" height="14"><path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"/><path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"/></svg></button>
                                                    <button onClick={() => handleDelete(index)} className="w-7 h-7 bg-[#007df5] hover:bg-[#059cf2] flex items-center justify-center rounded"><svg className="fill-white" viewBox="0 0 512 512" width="14" height="14"><g><path d="M448,85.333h-66.133C371.66,35.703,328.002,0.064,277.333,0h-42.667c-50.669,0.064-94.327,35.703-104.533,85.333H64 c-11.782,0-21.333,9.551-21.333,21.333S52.218,128,64,128h21.333v277.333C85.404,464.214,133.119,511.93,192,512h128 c58.881-0.07,106.596-47.786,106.667-106.667V128H448c11.782,0,21.333-9.551,21.333-21.333S459.782,85.333,448,85.333z M234.667,362.667c0,11.782-9.551,21.333-21.333,21.333C201.551,384,192,374.449,192,362.667v-128 c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333V362.667z M320,362.667 c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333v-128c0-11.782,9.551-21.333,21.333-21.333 c11.782,0,21.333,9.551,21.333,21.333V362.667z M174.315,85.333c9.074-25.551,33.238-42.634,60.352-42.667h42.667 c27.114,0.033,51.278,17.116,60.352,42.667H174.315z"/></g></svg></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr class="bg-[#1F2937] border-b">
                                        <td colSpan={4} class="px-6 py-4 font-medium text-white whitespace-nowrap">No Data Found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Todo;