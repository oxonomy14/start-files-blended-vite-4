import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';
import { selectfilteredTodoMemo } from '../../redux/filterSlice';

const TodoList = () => {
  //const todosData = useSelector(state => state.todoSlice.todos.items);

  const todos = useSelector(selectfilteredTodoMemo);

  //const filter = useSelector(state => state.filterSlice.filter);

  // Фільтрація
  //const filteredTodo = todosData.filter(item =>
  //  item.text.toLowerCase().includes(filter.toLowerCase()),
  //);

  return (
    <>
      {todos.length === 0 ? (
        <Text textAlign="center">No todos yet. Add anyone</Text>
      ) : (
        <>
          <Grid>
            {todos.map((todo, index) => (
              <GridItem key={todo.id}>
                <Todo id={todo.id} text={todo.text} counter={index + 1} />
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default TodoList;
