import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCalendarCheck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AppRouter from './AppRouter';

library.add(fab, faCheckSquare, faCalendarCheck, faUser);

function App() {
  return <AppRouter />;
}

export default App;
