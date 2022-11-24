import DropDown from './Dropdown';

const items = [
  {
    name:"option1",
    key:"option1"
  },
  {
    name:"option2",
    key:"option2"
  }
];

function App() {
  return (
    <div>
      <DropDown  
        title="Select an age"
        label="Select from the dropdown."
        items={items}
/>
    </div>
  );
}

export default App;
