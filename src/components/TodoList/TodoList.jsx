import Text from '../Text/Text';
import style from './TodoList.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import { deleteTodo, setIsEdit, setCurrentTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoList = ({ id, text, counter }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    dispatch(setCurrentTodo({ id, text, counter }));
    dispatch(setIsEdit(true));
  };

  return (
    <>
      {/*<Text textAlign="center">We did not find any todo😯</Text>*/}
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter} - {id}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => handleDeleteTodo(id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} onClick={handleEditTodo} />
        </button>
      </div>
    </>
  );
};

export default TodoList;
