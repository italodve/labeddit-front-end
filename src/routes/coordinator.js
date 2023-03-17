export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToDetailsPage = (navigate, recipeId) => {
  navigate(`/recipe/${recipeId}`);
};

export const goToCreateRecipePage = (navigate) => {
  navigate("/recipe/new");
};
