import Text from '../Text/Text';
import style from './Todo.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import { deleteTodo, setIsEdit, setCurrentTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const Todo = ({ id, text, counter }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    dispatch(setCurrentTodo({ id, text }));
    dispatch(setIsEdit(true));
  };

  return (
    <>
      {/*<Text textAlign="center">We did not find any todo😯</Text>*/}
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => handleDeleteTodo()}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={handleEditTodo}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </>
  );
};

export default Todo;
