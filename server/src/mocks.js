import casual from "casual";

const buildRandomUser = () => ({
  id: casual.uuid,
  name: casual.name,
  email: casual.email,
});

export const user = buildRandomUser();
export const users = [buildRandomUser(), user, buildRandomUser(), buildRandomUser(), buildRandomUser()];
export const validGoogleToken = "VALID_GOOGLE_TOKEN";
export const validInnerToken = "VALID_INNER_TOKEN";
export const session = { token: validInnerToken };
