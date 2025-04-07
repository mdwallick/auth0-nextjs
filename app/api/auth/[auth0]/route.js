/*
mike.wallick@atko.email
http://localhost:3000/api/auth/login?invitation=J8bll4Y5OUzDqjav9vZc0Y6j8V2FVa47&organization=org_TfaKJV07eYX6mbJc&organization_name=atko


les.claypool@atko.email
http://localhost:3000/api/auth/login?invitation=8FoiqC8kTgNY7pApGgY9mUs5UGBk9VPq&organization=org_TfaKJV07eYX6mbJc&organization_name=atko
*/

import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// function getInvitationParameters(req) {
//   // req.query does not work, since this is undefined (not forwarded?).
//   // new URLSearchParams(req.url) also does not work, since this delimits only on '&' (see comment below).
//   const { searchParams } = new URL(req.url);
//   return {
//     invitation: searchParams.get('invitation') || undefined,
//     organization: searchParams.get('organization') || 'org_TfaKJV07eYX6mbJc',
//     organization_name: searchParams.get('organization_name') || 'atko',
//     'ext-org-id': searchParams.get('organization') || 'org_TfaKJV07eYX6mbJc',
//     'ext-invitation': searchParams.get('invitation') || undefined
//   };
// }

// export const GET = handleAuth({
//   login: handleLogin(req => {
//     return { authorizationParams: { ...getInvitationParameters(req) } };
//   })
// });

//export const GET = handleAuth();

// function getURLParameters(req) {
//   // req.query does not work, since this is undefined (not forwarded?).
//   // new URLSearchParams(req.url) also does not work, since this delimits only on '&' (see comment below).
//   const { searchParams } = new URL(req.url);
//   return {
//     screen_hint: searchParams.get('screen_hint') || undefined
//   };
// }

export const GET = handleAuth({
  login: handleLogin(req => {
    const { searchParams } = new URL(req.url);
    const screen_hint = searchParams.get('screen_hint') || undefined;
    const connection = searchParams.get('connection') || undefined;
    const login_hint = searchParams.get('login_hint') || undefined;
    const returnTo = searchParams.get('returnTo') || '/';

    console.log('screen_hint', screen_hint);
    console.log('connection', connection);
    console.log('login_hint', login_hint);
    console.log('return_to', returnTo);

    return {
      authorizationParams: {
        screen_hint: screen_hint,
        connection: connection,
        login_hint: login_hint
      },
      returnTo: returnTo
    };
  })
});
