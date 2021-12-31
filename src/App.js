import './App.css';
import { CommentsParent } from './Components/CommentsParent';

function App() {
  let n = 45;
  return (
    <div>
      <CommentsParent noOfComment={n} />
    </div>
  );
}

export default App;
