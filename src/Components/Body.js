//import logo from './logo.svg';
import './Body.css';

function Body(props) {
  let modevalue="light";
    if  (props.mode){
        modevalue="light"
    }
    else{
        modevalue="dark";
    }
  return (
    <div className="box" style={props.mystyle2}>
        <h2 className={` text-${modevalue} h2`}>Welcome to this website{props.myvalue}.</h2>
        
    </div>
      
  );
}

export default Body;