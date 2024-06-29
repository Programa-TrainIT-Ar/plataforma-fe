import React from 'react';
import AppMenu from './AppMenu';


const AppSidebar= ({ setShowModules }:{  setShowModules: (show: boolean) => void}) => {
  return (
    <div className="app-sidebar">
      <AppMenu setShowModules={setShowModules} />
    </div>
  );
};

export default AppSidebar;
