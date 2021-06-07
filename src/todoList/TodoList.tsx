import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
