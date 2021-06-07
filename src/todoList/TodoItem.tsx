import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atom';
import { ITodoItem } from './TodoItemCreator';

const TodoItem: FC<{ item: ITodoItem }> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }: any) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
//@ts-ignore
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
//@ts-ignore
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
