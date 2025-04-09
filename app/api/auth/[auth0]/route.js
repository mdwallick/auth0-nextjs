/*
mike.wallick@atko.email
http://localhost:3000/api/auth/login?invitation=J8bll4Y5OUzDqjav9vZc0Y6j8V2FVa47&organization=org_TfaKJV07eYX6mbJc&organization_name=atko


les.claypool@atko.email
http://localhost:3000/api/auth/login?invitation=8FoiqC8kTgNY7pApGgY9mUs5UGBk9VPq&organization=org_TfaKJV07eYX6mbJc&organization_name=atko
*/

import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin(req => {
    const { searchParams } = new URL(req.url);
    const screen_hint = searchParams.get('screen_hint') || undefined;
    const connection = searchParams.get('connection') || undefined;
    const login_hint = searchParams.get('login_hint') || undefined;
    const returnTo = searchParams.get('returnTo') || '/';
    const organization = searchParams.get('organization') || 'org_TfaKJV07eYX6mbJc';
    const organization_name = searchParams.get('organization_name') || 'atko';
    const invitation = searchParams.get('invitation') || undefined;
    const ext_org_id = searchParams.get('organization') || 'org_TfaKJV07eYX6mbJc';
    const ext_invitation = searchParams.get('invitation') || undefined;

    return {
      authorizationParams: {
        screen_hint: screen_hint,
        connection: connection,
        login_hint: login_hint,
        invitation: invitation,
        organization: organization,
        organization_name: organization_name,
        'ext-org-id': ext_org_id,
        'ext-invitation-id': ext_invitation
      },
      returnTo: returnTo
    };
  })
});
