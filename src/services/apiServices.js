import instance from "../utils/axiosCustomize";

const postCreateUser = (email, password, role, username, image) => {
  //   const [email, password, role, username, image] = props;
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return instance.get("api/v1/participant/all");
};

export { postCreateUser, getAllUsers };
