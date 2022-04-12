import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <h3>
        {task.product}

        <Link to={`/products/${task.id}`}>
          <FaEdit
            onClick={onEdit}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-pen-to-square"
          />
        </Link>

        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>
        {task.price} {task.currency}
      </p>
    </div>
  );
};

export default Task;
