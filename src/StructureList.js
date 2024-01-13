import CommentData from "./CommentData";

const StructureList = ({ data, handeNestedData }) => {
  return data.map((comment, index) => (
    <div key={index}>
      <CommentData data={comment} handeNestedData={handeNestedData} />
      {comment.folderData && (
        <div style={{ paddingLeft: "15px", borderLeft: "1px solid black" }}>
          <StructureList
            data={comment.folderData}
            handeNestedData={handeNestedData}
          />
        </div>
      )}
    </div>
  ));
};

export default StructureList;
