import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { setIsEdit, editTodo, setCurrentTodo } from '../../redux/todoSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todoSlice';
import toast from 'react-hot-toast';

import style from './EditForm.module.css';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(state => state.todoSlice.currentTodo);
  const todos = useSelector(selectTodos);

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();
    if (!text) return;
    if (compareContact(text)) {
      toast.error('Така назва вже є');

      return;
    }
    updateTodo(text);
    e.target.reset();
  };

  const compareContact = text => {
    const compare = todos.some(
      item => item.text.toLowerCase() === text.toLowerCase(),
    );
    return compare;
  };

  const updateTodo = text => {
    dispatch(editTodo({ ...currentTodo, text }));
    dispatch(setIsEdit(false));
    dispatch(setCurrentTodo(null));
  };

  const cancelUpdate = () => {
    dispatch(setIsEdit(false));
    dispatch(setCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo?.text || ''}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
