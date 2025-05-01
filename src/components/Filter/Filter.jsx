import style from './Filter.module.css';
import { useDispatch } from 'react-redux';

import { filterTodo } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterTodo = e => {
    dispatch(filterTodo(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilterTodo}
    />
  );
};

export default Filter;
