import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoList from '../TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectfilteredTodoMemo } from '../../redux/filterSlice';

const Todo = () => {
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
          <Text textAlign="center" marginBottom="20">
            TODO
          </Text>
          <Grid>
            {todos.map(todo => (
              <GridItem key={todo.id}>
                <TodoList
                  id={todo.id}
                  text={todo.text}
                  counter={todo.counter}
                />
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Todo;
