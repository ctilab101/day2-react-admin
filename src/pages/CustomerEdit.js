import React from "react";
import { useParams } from "react-router-dom";

const CustomerEdit = () => {
  const params = useParams();
  console.log(params);

  return <div>Edit Customer Page.</div>;
};

export default CustomerEdit;
