import {  Container, Grid,  Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHerder from './components/MainHerder';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHerder title="budgert" type="h1"/>
      <DisplayBalance  title="Your Balance" value="2550.53" size="small" />
      <DisplayBalances />
      <MainHerder title="History" type="h3"/>
      <EntryLine description="inconme" value="$10.00" />
      <EntryLine description="expense" value="$10.00" isExpense />
      <MainHerder title="Add new transaction" type="h3"/>
      <NewEntryForm />
    </Container>
  );
}

export default App;
