import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { UserPanel, UserPanelWithUser } from "components/users";
import { withUser } from "queries";
import { NullTokenProvider, ValidTokenProvider } from "stories/decorators";

storiesOf("Broken behavior", module)
  .add("User panel when user is not logged", () =>
    <NullTokenProvider>
      <UserPanelWithUser />
    </NullTokenProvider>,
  )
  .add("User panel when user is logged", () =>
    <ValidTokenProvider>
      <UserPanelWithUser />
    </ValidTokenProvider>,
  );

const UserPanel1 = withUser(UserPanel);
const UserPanel2 = withUser(UserPanel);

storiesOf("Nasty workaround", module)
  .add("User panel when user is not logged", () =>
    <NullTokenProvider>
      <UserPanel1 />
    </NullTokenProvider>,
  )
  .add("User panel when user is logged", () =>
    <ValidTokenProvider>
      <UserPanel2 />
    </ValidTokenProvider>,
  );
