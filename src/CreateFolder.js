import React, { useState } from "react";
import CreateBridgeFolder from "./CreateBridgefolder";

const CreateFolder = ({ data, handleAddNestedFolder }) => {
  const { id, name, type, folderData } = data;
  const [creatingItem, setCreatingItem] = useState(null);
  const [names, setName] = useState("");

  const handleAddFolder = () => {
    if (creatingItem === "folder" && names.trim() !== "") {
      const newAddedFolder = {
        id: Date.now(), // Using a timestamp as a unique identifier
        name: names,
        type: creatingItem,
        folderData: [],
      };
      handleAddNestedFolder(id, newAddedFolder);
    }
    if (creatingItem === "file" && names.trim() !== "") {
      const newAddedFile = {
        id: Date.now(), // Using a timestamp as a unique identifier
        name: names,
        type: creatingItem,
      };
      handleAddNestedFolder(id, newAddedFile);
    }
  };

  const formState = (typeName) => {
    return (
      <div>
        <input
          type="text"
          placeholder={`Enter ${typeName} name`}
          value={names}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddFolder}>Create</button>
      </div>
    );
  };

  const handleFolder = () => {
    setCreatingItem("folder");
    setName("");
  };

  const handleFile = () => {
    setCreatingItem("file");
    setName("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
    >
      <div style={{ cursor: "pointer", marginRight: "10px" }}>
        <img
          onClick={handleFile}
          width={20}
          height={20}
          src="https://cdn0.iconfinder.com/data/icons/iconico-3/1024/55.png"
          alt="icon"
        />
      </div>
      <div style={{ cursor: "pointer" }}>
        <img
          onClick={handleFolder}
          width={20}
          height={20}
          src="https://cdn.iconscout.com/icon/free/png-256/free-create-file-8-1123606.png"
          alt="icon"
        />
      </div>
      {creatingItem && formState(creatingItem)}
      {folderData.length > 0 && (
        <div
          style={{
            marginLeft: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CreateBridgeFolder
            data={folderData}
            handleAddNestedFolder={handleAddNestedFolder}
          />
        </div>
      )}
    </div>
  );
};

export default CreateFolder;