import "./styles.css";
import User from "./component/User";

export default function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      
      <User name="Sudipa Samanta" age={20} isregistered={true}/>
      <User name="Subhadip Samanta" age={18} isregistered={false}/>
      <User lang={["Bangali","English"]}/>
    </div>
  );
}
