import React from "react";
import { withUser } from "queries";

const UserPanel = ({ data }) => <div>{data.loading ? "loading" : data.user.name}</div>;

export default withUser(UserPanel);
