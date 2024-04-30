import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is react learning</h2>
      <User name={"Mihir Palyekar (Functional)"}/>
      <UserClass name={"Mihir Palyekar (Class)"} />
    </div>
  );
};

export default About;
