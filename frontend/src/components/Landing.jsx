import Lists from './Landing_Lists'
// imported temporarily. proper part of the program will be added to Lists.
//import AddEntry from './AddEntry';

import './Landing.css';

function Landing() {

  return (
    <>
      <div className="landing">
        Welcome
      </div>
       <Lists />
    </>
  );
}

export default Landing;

/*
  /*const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
      
    )
  }, []);*/
/*
  <div>

  {(typeof backendData.users === 'undefined') ? (
    <p>loading...</p>
  ): (
    backendData.users.map((user, i ) =>(
      <p key={i}>{user}</p>
    ))
  )}

</div>

*/