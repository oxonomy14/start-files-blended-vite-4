import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { addTodo } from '../../redux/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const values = form.elements.search.value;
    console.log(values);
    handleAddTodo(values);

    form.reset();
  };

  const handleAddTodo = values => {
    if (compareContact(values)) {
      toast.error('Така назва вже є');

      return;
    }
    const newTodo = {
      id: nanoid(),
      text: values,
    };
    dispatch(addTodo(newTodo));
  };

  const compareContact = text => {
    const compare = todos.some(
      item => item.text.toLowerCase() === text.toLowerCase(),
    );
    return compare;
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
