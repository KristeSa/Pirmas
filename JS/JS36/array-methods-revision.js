//ToDo: apsibrezti vartotojus(vardas, pavarde, susitikimo versija (yra 2 ver)
//Reikia masyvo, kur vartotojai sutike su x ver
//kur nesutike su x ver
//kur visiskai nesutike

const getConsumers = (consumerCount = 10) => {
  const consumers = [];

  function Consumer(firstName, agreedPrivacyPolicyVersion = null) {
    this.firstName = firstName;
    this.agreedPrivacyPolicyVersion = agreedPrivacyPolicyVersion;
  }

  const getRandomName = (randomNumber) => {
    switch (randomNumber) {
      case 0:
        return "Tomas";
      case 1:
        return "Jonas";
      case 2:
        return "Ona";
      case 3:
        return "Saule";
      case 4:
        return "Lina";
      case 5:
        return "Mantas";
      default:
        return null;
    }
  };

  for (let i = 0; i < consumerCount; i++) {
    const randomNumber = Math.round(Math.random() * 5);
    const firstName = getRandomName(randomNumber);
    const privacyPolicyVersion =
      randomNumber <= 0.1 ? null : randomNumber + 0.1;
    const consumer = new Consumer(firstName, privacyPolicyVersion);

    consumers.push(consumer);
    //console.log(randomNumber);
  }
  return consumers;
};
const consumers = getConsumers(50);
const consumersAgreedToPrivacyPolicyVerX = [];
const consumersNotAgreedToPrivacyPolicyVerX = [];
const consumersNotAgreedToPrivacyPolicy = [];

consumers.forEach((consumer) => {
  if (consumer.agreedPrivacyPolicyVersion > 3) {
    consumersAgreedToPrivacyPolicyVerX.push(consumer);
    return;
  }
  if (consumer.agreedPrivacyPolicyVersion === null) {
    consumersNotAgreedToPrivacyPolicy.push(consumer);
    return;
  }
  consumersNotAgreedToPrivacyPolicyVerX.push(consumer);
});

//console.log(getConsumers(50));
console.log({
  consumersAgreedToPrivacyPolicyVerX,
  consumersNotAgreedToPrivacyPolicyVerX,
  consumersNotAgreedToPrivacyPolicy,
});
