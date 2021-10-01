import React from "react";
import { useParams, useLocation,useHistory } from "react-router-dom";

// const User = ({match}) => {
//     return <h1> User {match.params.name} page</h1>;
// }

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  return (
    <>
      <h1>
        User {fname} {lname} page
      </h1>
      <p>My curent location is {location.pathname}</p>
      {/* {location.pathname ===  `/user/biswa/maj`?(<button onClick={()=> history.goBack()}>Click me</button>):null} */}
      {location.pathname ===  `/user/biswa/maj`?(<button onClick={()=> history.push('/')}>Click to go home</button>):null}
    </>
  );
};

export default User;
