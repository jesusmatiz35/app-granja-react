
export const onShowHide = () => {
    const pwShowHide = document.querySelectorAll(".eye-icon");

    pwShowHide.forEach((eyeIcon) => {
      let pwFields =
        eyeIcon.parentElement.parentElement.querySelectorAll(".password");
      pwFields.forEach((password) => {
        if (password.type === "password") {
          // If password is hidden
          password.type = "text"; // Show password
          eyeIcon.classList.replace("fa-eye-slash", "fa-eye"); // Change icon to show state
          return;
        }
        password.type = "password"; // Hide password
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash"); // Change icon to hide state
      });
    });
}
