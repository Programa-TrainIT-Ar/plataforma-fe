import React from "react";
import ModulesTable from "./ModulesTable";
import ModuleService from "@/services/ModuleService";

const Modules = async () => {
  const modules = await ModuleService.getModules();

  return (
    <>
      <h3>Modulos</h3>
      <ModulesTable modules={modules}/>
    </>
  );
};

export default Modules;