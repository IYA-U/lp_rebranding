import fetch from 'node-fetch';

export default async ({ path, params }) => {
  const portalApiHost = 'https://napi.unext.jp';
  const reqBody = {
    common: {
      userInfo: {
        userToken: '',
        pfid: '',
        securityToken: '',
      },
      deviceInfo: {
        deviceType: '700',
        appVersion: '1',
      },
    },
    data: params,
  };

  try {
    const res = await fetch(`${portalApiHost}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': '',
        'X-Forwarded-For': '',
      },
      body: JSON.stringify(reqBody),
    });

    if (res.status !== 200) {
      const error = new Error(
        `API request to ${portalApiHost}${path} failed with HTTP status ${res.status} ${res.statusText}`,
      );
      error.response = res;
      throw error;
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};
