import { useState } from "react";

const CommentData = ({ data, handeNestedData }) => {
  const [show, setShow] = useState(false);
  const { id, name, type, folderData } = data;
  const handleAdd = (type) => {
    if (type == "file") {
      const newFile = {
        id: `${id}_${folderData.length + 1}`,
        name: prompt("Enter file name"),
        type: "file",
      };
      handeNestedData(id, newFile);
    }
    if (type == "folder") {
      const newFolder = {
        id: `${id}_${folderData.length + 1}`,
        name: prompt("Enter folder Name"),
        type: "folder",
        folderData: [],
      };
      handeNestedData(id, newFolder);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        boxShadow: "revert",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        marginBottom: "5px",
      }}
    >
      <div style={{ paddingRight: "5px" }}>
        <p
          style={{ fontWeight: "900", margin: 0 }}
          onClick={() => setShow(!show)}
        >
          {type === "file" ? "📄" : "📁"} {name}
        </p>
      </div>
      {show && (
        <div style={{ marginLeft: "20px" }}>
          <button onClick={() => handleAdd("file")}>📄</button>
          <button onClick={() => handleAdd("folder")}>📁</button>
        </div>
      )}
    </div>
  );
};

export default CommentData;
