import React from "react";

const UserPanel = ({ data }) => <div>{data.loading ? "loading" : data.user.name}</div>;

export default UserPanel;
