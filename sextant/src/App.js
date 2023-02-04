import './App.css';
import Banner from './Banner';
import AddressRequest from './AddressRequest';

function App() {
  return (
    <div>

      <Banner />
      <AddressRequest protocol="ipv4" />
      <AddressRequest protocol="ipv6" />

    </div>
  );
}

export default App;
