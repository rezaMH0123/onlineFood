const postUser = async (props) => {
  const { name, email, password } = props;
  //   var formdata = { name: name, email: email, password: password };
  var formdata = new FormData();
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("password", password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  let data = fetch("http://37.32.26.114/api/user/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return data;
};
const postUserSignin = async (props) => {
  const { email, password } = props;

  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("password", password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  let data = fetch("http://37.32.26.114/api/token/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return data;
};
export { postUserSignin };
export { postUser };
