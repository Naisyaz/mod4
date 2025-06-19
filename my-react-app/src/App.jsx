// import "./App.css
import Welcome from "./Welcome";
import { btnClick } from "./btnClick";
import Profile from "./components/Profile";

function App() {
  const myName = "Aisyah"
  const fullName = "Nurul Aisyah"
  let fruits = ["Apple", "Mango", "Banana", "Kiwi"]

  const profiles = [
    {
      name: "Paul",
      title: "Software Engineer",
      imageUrl: "https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P6932_1.jpg"
    },
    {
      name: "Tony Stark",
      title: "Genius Billionaire Philanthrophist",
      imageUrl: "https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P6932_1.jpg"
    },
    {
      name: "Hiccup",
      title: "Master of Dragons",
      imageUrl: "https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P6932_1.jpg"
    }
  ]

  return (
    <div>
      <Welcome name={myName} fullNameABC={fullName} />
      <h4>List of hobbies</h4>
      <ul>
        <li>Reading</li>
        <li>Traveling</li>
        <li>Gaming</li>
      </ul>

      {myName == "Aisyah" ? <button onClick={() => btnClick(myName)}>It's Aisyah</button> : null}
      <ol>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ol>


      {profiles.map((profile, i) => (
        <Profile key={i} name={profile.name} title={profile.title} imgUrl={placeholderUrl} />
      ))}
      <button onClick={() => count()}>Count</button>
    </div>
  );
}

export default App;
