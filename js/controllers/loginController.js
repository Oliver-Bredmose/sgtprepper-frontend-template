import { Authenticate } from "../models/loginModel.js";
import {
  deleteSessionItem,
  getSessionItem,
  setSessionItem,
} from "../services/auth.js";
import { Button } from "../views/atoms/index.js";
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from "./LayoutController.js";

export const LoginPage = () => {
  if (getSessionItem("sgtpreppers_token")) {
    const token = getSessionItem("sgtpreppers_token");
    const html = UserInfoView(token.user);
    return Layout("Din side", html);
  } else {
    const html = LoginFormView();

    html.addEventListener("submit", (e) => {
      handleLogin(e);
    });
    return Layout('Login', html)
  }

 
};

export const handleLogin = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username && password) {
    const data = await Authenticate(username, password);

    if (data.accessToken) {
      setSessionItem("sgtprepper_token", data);
      location.href = "./index.htm";
    }
  }
};