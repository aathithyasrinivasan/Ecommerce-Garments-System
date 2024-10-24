import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='home-panel'>
        <div className='load-panel'>
        <Spinner animation="border" />
      </div>
    </div>
  );
}

export default Loader;