// import React from "react";

// const userContext = React.createContext();
// const userProvider = userContext.Provider;
// const userConsumer = userContext.Consumer;

// export {userConsumer , userProvider};


import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer };