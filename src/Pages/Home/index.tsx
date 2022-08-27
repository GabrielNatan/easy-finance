import { Account } from "../../Components/Account";
import Sidebar from "../../Components/Sidebar";
import {FaBell, FaChevronDown, FaPlus} from 'react-icons/fa'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { Add } from "../../Components/Add";
function Home() {
    return (
      <div className="App">
        {/* <Sidebar/> */}
        {/* <Account
          name='Alice Willians'
          leftIcon={<FaBell/>}
          rightIcon={<FaChevronDown/>}
          image='https://i.pinimg.com/originals/39/0e/4a/390e4aa2c02a1614a143256fa1b9df89.jpg'
        /> */}
        <Add
          icon={
            <AiOutlinePlusCircle 
              size={30}
            />}
          text="Add new Card"
        />
      </div>
    );
  }
  
  export default Home;
  