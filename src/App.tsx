import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import CharacterCounter from './CharacterCounter';
import TodoList from './todoList/TodoList';

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
