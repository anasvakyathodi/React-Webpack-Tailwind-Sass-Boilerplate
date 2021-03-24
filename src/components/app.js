import React from "react";
import "./../assets/scss/app.scss";
const App = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen bg-indigo-50 flex-col">
      <div className="bg-indigo-600 p-4 rounded-md max-w-5xl">
        <div className="text-white font-mono text-center text-5xl">
          TailWind Boilerplate with Webpack
        </div>
      </div>
      <div className="text-indigo-600 p-4 mt-2 font-mono rounded-md text-4xl bg-gray-50">
        Anas Vakyathodi
      </div>
    </div>
  );
};

export default App;
