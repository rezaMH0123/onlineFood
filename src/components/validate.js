const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "ایمیل را باید وارد کنید";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "آدرس ایمیل نادرست می باشد";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "رمز ورود را باید وارد کنید";
  } else if (data.password.length < 6) {
    errors.password = "رمز ورود باید حداقل 6 حرف باشد";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "نام کاربری را باید وارد کنید";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "تکرار رمز ورود را باید وارد کنید";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "تکرار رمز ورود مشابه نمی باشد";
    } else {
      delete errors.confirmPassword;
    }
    if (!data.isAccepted) {
      errors.isAccepted = "Accept or regulations";
    } else {
      delete errors.isAccepted;
    }
  }
  return errors;
};
export default validate;
