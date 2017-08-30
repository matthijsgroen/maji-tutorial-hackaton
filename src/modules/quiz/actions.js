import * as constants from "./constants";

export const giveAnswer = answer => ({
  answer,
  type: constants.GIVE_ANSWER
});
