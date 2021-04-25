import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // setTasks([...tasks,{id:4,test:'abc',day:'a day',reminder:false,}])
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
