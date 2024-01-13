import React from "react";
import CreateFolder from "./CreateFolder";

const CreateBridgeFolder = ({ data, handleAddNestedFolder }) => {
  return data.map((item) => (
    <div key={item.id} style={{ padding: "10px" }}>
      <CreateFolder
        key={item.id}
        data={item}
        handleAddNestedFolder={handleAddNestedFolder}
      />
    </div>
  ));
};

export default CreateBridgeFolder;