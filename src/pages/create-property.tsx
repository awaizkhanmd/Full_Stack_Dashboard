import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValue, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [propertyImage, setpropertyImage] = useState({ name: "", url: "" });
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  return <div>createProperty</div>;
};

export default CreateProperty;
