import { withAuth } from '@workos-inc/authkit-nextjs';
import { UsersWidgetClient } from './UsersWidgetClient';
import { WorkOS } from '@workos-inc/node';
import { redirect } from 'next/navigation';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);

export default async function UsersPage() {
  const { user, organizationId } = await withAuth();

  if (!user || !organizationId) redirect('/');

  const authToken = await workos.widgets.getToken({
    userId: user.id,
    organizationId,
    scopes: ['widgets:users-table:manage'],
  });

  return <UsersWidgetClient authToken={authToken} />;
}
