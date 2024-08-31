export function loginRequest(email, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@admin.com" && senha === "123456") {
        resolve({
          email: "admin@admin.com",
          username: "admin",
        });
      } else {
        reject(new Error("E-mail e/ou senha inválidos"));
      }
    }, 3000);
  });
}
