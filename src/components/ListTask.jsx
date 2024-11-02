import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterStatus } from "../redux/taskSlice";
import Task from "./Task";

function ListTask() {
  const { taskList, filterStatus } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = taskList.filter((task) => {
    if (filterStatus === "done") return task.isDone;
    if (filterStatus === "not") return !task.isDone;
    return true;
  });

  return (
    <div className="action_btn">
      <div>
        <button
          className="all"
          onClick={() => dispatch(setFilterStatus("all"))}
        >
          All
        </button>
        <button
          className="done"
          onClick={() => dispatch(setFilterStatus("done"))}
        >
          Done
        </button>
        <button
          className="not_done"
          onClick={() => dispatch(setFilterStatus("not"))}
        >
          Not Done
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default ListTask;
