//const agreedPrivacyPolicyVersion = 2.5
//document.cookie = `agreedPrivacyPolicyVersion=${agreedPrivacyPolicyVersion}`

const privacyButton = document.body.querySelector("#privacyPolicySubmitButton");

privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

//locale Storage

const localStorageSubmitButton = document.body.querySelector(
  "#localeStorageSubmitButton"
);

localStorageSubmitButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});
