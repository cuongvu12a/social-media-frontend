import { Module } from "@src/models";

const lang: Record<Module, Record<string, string>> = {
  title: {
    pageNotFound: 'Page Not Found ⚠️',
    loginPage: 'Welcome to Vuexy! 👋',
    registerPage: 'Adventure starts here 🚀',
  },
  content: {
    pageNotFound: 'The requested URL /error was not found on this server.',
    loginPage: 'Please sign-in to your account and start the adventure',
    registerPage: 'Make your app management easy and fun!',
    forgotPassword: 'Forgot password?',
    newOnOurPlatform: 'New on our platform?',
    createAnAccount: 'Create an account',
    alreadyHaveAnAccount: 'Already have an account?',
    signInInstead: 'Sign in instead',
  },
  button: {
    backToHome: 'Back to home',
    loginSubmit: 'Sign in',
    registerSubmit: 'Sign up',
    logout: 'Logout',
  },
  label: {
    accountName: 'Account name',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    agree: 'I agree to',
    privacyPolicyTerms: 'privacy policy & terms',
  },
  placeholder: {
    email: 'vuexy@gmail.com',
    password: '⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉',
    accountName: 'account name...',
    firstName: 'first name...',
    lastName: 'last name...'
  },
  message: {
    requireEmail: 'The Email field is required!',
    requireFirstName: 'The first name field is required!',
    requireLastName: 'The last name field is required!',
    validEmail: 'The Email field must be a valid email!',
    requirePassword: 'The Password field is required!',
    validPassword: 'The Password field must be a valid password!',
    passwordNotMatch: 'Passwords must match',
    minLengthPassword: 'The Password field must be at least 6 characters!',
    isTrueValueAgree: 'Please read and agree to the policy & privacy information'
  },
};

export default lang;
