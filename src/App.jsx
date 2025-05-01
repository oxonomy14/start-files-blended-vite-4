import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Todo from './components/Todo/Todo';
import EditForm from './components/EditForm/EditForm';

import { useSelector } from 'react-redux';

export const App = () => {
  const isEdit = useSelector(state => state.todoSlice.isEdit);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!isEdit ? <Form /> : <EditForm />}

          <Filter />
          <Todo />
        </Container>
      </Section>
    </>
  );
};
