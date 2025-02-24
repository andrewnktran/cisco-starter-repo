import './App.css';
import Banner from './Banner';
import AddressRequest from './AddressRequest';
import PylonLatency from './PylonLatency';


function App() {
  return (
    <div>

      <Banner />
      <AddressRequest protocol="ipv4" />
      <AddressRequest protocol="ipv6" />
      <PylonLatency />

    </div>
  );
}

export default App;
