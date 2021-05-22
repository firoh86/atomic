const Atoms = () => {
  const Buttons = {
    buttonD: "button ",
    buttonP: "button button__primary",
    buttonS: "button button__secondary",
    buttonDs: "button button__disabled",
  };
  const Inputs = {
    inputD: "input",
    inputP: "input input__primary",
    inputS: "input input__secondary",
    inputTA: "input input__textarea",
    inputSl: "input input__select",
  };

  const Labels = {
    labelD: "label",
  };

  const Titles = {
    titleD: "tittle",
    titleF: "tittle form__title",
    subtitleF: "tittle form__subtitle",
  };

  return [Buttons, Inputs, Labels, Titles];
};

export default Atoms;
