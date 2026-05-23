export async function subscribePush() {
  const registration =
    await navigator.serviceWorker.ready;

  return registration.pushManager.subscribe(
    {
      userVisibleOnly: true,
      applicationServerKey:
        "YOUR_PUBLIC_VAPID_KEY",
    }
  );
}