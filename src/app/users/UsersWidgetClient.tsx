'use client';

// Client component that renders the WorkOS Users Management widget.

import { WorkOsWidgets, UsersManagement } from '@workos-inc/widgets';

export function UsersWidgetClient({ authToken }: { authToken: string }) {
  return (
    <WorkOsWidgets>
      <UsersManagement authToken={authToken} />
    </WorkOsWidgets>
  );
}
