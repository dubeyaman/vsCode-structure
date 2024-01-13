import React, { useState } from "react";
import StructureList from "./StructureList";

const Vscode = () => {
  const [dynamicStructure, setDynamicStructure] = useState([]);
  // Function to add a new file
  const addFile = () => {
    const newFile = {
      id: dynamicStructure.length + 1,
      name: prompt("Enter file name"),
      type: "file",
    };

    setDynamicStructure([...dynamicStructure, newFile]);
  };

  // Function to add a new folder
  const addFolder = () => {
    const newFolder = {
      id: dynamicStructure.length + 1,
      name: prompt("Enter folder name"),
      type: "folder",
      folderData: [],
    };

    setDynamicStructure([...dynamicStructure, newFolder]);
  };

  const handeNestedData = (parentId, reply) => {
    const findParentData = (dynamicStructure, targetId) => {
      for (const struct of dynamicStructure) {
        if (struct.id === targetId) {
          return struct;
        } else if (struct.folderData && struct.folderData.length > 0) {
          const foundInNested = findParentData(struct.folderData, targetId);
          if (foundInNested) {
            return foundInNested;
          }
        }
      }
      return null;
    };

    const parentComment = findParentData(dynamicStructure, parentId);
    if (parentComment) {
      parentComment.folderData = [...parentComment.folderData, reply];

      const updatedStructure = dynamicStructure.map((data) =>
        data.id === parentId
          ? { ...data, folderData: parentComment.folderData }
          : data
      );

      setDynamicStructure(updatedStructure);
    }
  };

  return (
    <div style={{ margin: "5px", padding: "2px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <h1 style={{ fontWeight: "900" }}>Start making Structure:</h1>
        <div style={{ marginTop: "32px", gap: "20px" }}>
          <button onClick={addFile}>📄</button> {"   "}
          <button onClick={addFolder}>📁</button>
        </div>
      </div>
      <StructureList
        data={dynamicStructure}
        handeNestedData={handeNestedData}
      />
    </div>
  );
};

export default Vscode;
