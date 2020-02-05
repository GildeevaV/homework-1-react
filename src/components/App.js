import React from "react";
import user from "../user.json";
import statistic from "../statistical-data.json";
import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";




const App = () => {


  console.log('user', user)
  return (
    <>
      <Profile user={user} />
      <Statistic statistic={statistic} />
    </>
  );
};
export default App;