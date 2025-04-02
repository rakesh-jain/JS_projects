import { useState, createContext, useContext } from 'react'
import './App.css'
import { FaSun, FaMoon } from "react-icons/fa";

//example one 
//create context
const MyContext = createContext();
const MyContextProvider = ({children})=>{

  //provide the context
const[name, setName] = useState("rakesh");

return(
 <MyContext.Provider value={{name, setName}}>
  {children}
 </MyContext.Provider>
);
}
function MyComponent(){
  const {name ,setName} = useContext(MyContext);
  return(
    <div>
          <p>{name}</p>
          <input
          type="text"
           placeholder='type name'
           value={name}
           onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
  );
}
function App() {

  return (
    <>
       <MyContextProvider>
        <MyComponent/>
        </MyContextProvider> 
        <ThemeChange/>
        <ProfilePage/>
    </>
  )
}


//example two


//create the context
const ThemeContext = createContext({
  theme:"white",
  toggleTheme:()=>{}
});

//provide the context
const ThemeProvider =({children})=>{
  const[theme, setTheme]=useState("pink");

  const toggleTheme=()=>{
  setTheme((prev)=>prev=="pink"?"purple":"pink");
  }

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  );
}

const ThemeComponent = ()=>{
  const{theme, toggleTheme} = useContext(ThemeContext);
  const backgroundColor = theme=="pink"?"purple":"pink";
  const textColor = theme =="pink"?"pink":"purple";
  return(
    <div
    style={{
      backgroundColor,
      color: textColor,
      height: "250px",
      animation:"running",
      width :"250px",
      position: "relative", // Ensure the parent container is positioned
      transition: "background-color 0.5s ease-in-out",
      
    }}
  >
    <button
      onClick={toggleTheme}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background:backgroundColor,
        // background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
        backdropFilter: "blur(10px)", // Blurred background
        border: "none",
        cursor: "pointer",
        fontSize: "28px",
        padding: "10px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
        transition: "all 0.3s ease-in-out",
        color: textColor,
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Current Theme: {theme.toUpperCase()}
      </p>
    </div>
  </div>
  );
}

const ThemeChange=()=>{
  return(
    <ThemeProvider>
      <ThemeComponent/>
    </ThemeProvider>
  );
}

//example three

const MyProfileContext = createContext();

const ProfilePage =()=>{
  const[name, setName]=useState('Rakesh');
  const[email, setEmail]= useState('rakeshrjain02@gmail.com');

  return (
   <MyProfileContext.Provider value={{name, email, setName, setEmail}}>
     <h1> My App</h1>
     <DashBoard/>
     <AccountSetting />
    </MyProfileContext.Provider>
  );
}
const DashBoard = ()=>{
  const{name, email}= useContext(MyProfileContext);
  return(
   <div>
    <p>Name: - {name}</p>
    <p>email: - {email}</p>
   </div>
  );
}

const AccountSetting = ()=>{
  const { setName, setEmail } = useContext(MyProfileContext);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleUpdate = () => {
    if (newName.trim()) setName(newName);
    if (newEmail.trim()) setEmail(newEmail);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter new email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}


export default App
