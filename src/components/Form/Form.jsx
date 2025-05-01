import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { addTodo } from '../../redux/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const values = form.elements.search.value;
    console.log(values);
    handleAddTodo(values);

    form.reset();
  };

  const handleAddTodo = values => {
    const newTodo = {
      id: nanoid(),
      text: values,
    };
    dispatch(addTodo(newTodo));
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
