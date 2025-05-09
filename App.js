import './App.css';
import {Header} from './header'
import {Balance} from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';  

import { AddTranscationComponent } from './components/AddTranscationComponent';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div>
      <GlobalProvider>
      <Header/>
      <div className="container">
           <Balance/>
           <IncomeExpenses/>
           <TransactionList/>
           <AddTranscationComponent/>
      </div>
      </GlobalProvider>

    </div>
  );
}
export default App;
