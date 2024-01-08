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

const putUpdateUser = (id, role, username, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.put("api/v1/participant", data);
};

const getAllUsers = () => {
  return instance.get("api/v1/participant/all");
};

const deleteUser = (userId) => {
  return instance.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return instance.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return instance.post("api/v1/login", { email, password });
};

const postRegister = (email, password, username, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("userImage", image);

  return instance.post("api/v1/register", data);
};

export {
  postCreateUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
};
