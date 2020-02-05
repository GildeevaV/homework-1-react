import React from "react";
import user from "../user.json";
import statistic from "../statistical-data.json";
import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";
// console.log(statistical);

// const x = function(message) {
//   return console.log('========App message=======', message)
// }

const App = () => {


  console.log('user', user)
  return (
    <>
      <Profile user={user}  title="hello" x={x}/>
      <Statistic statistic={statistic} />
    </>
  );
};
export default App;