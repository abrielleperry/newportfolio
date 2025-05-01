export default function StepCounterPreview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-center">
      <h1 className="text-2xl font-semibold mb-4">To preview Step Counter</h1>
      <p className="mb-2">
        Install the{" "}
        <a
          href="https://expo.dev/client"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Expo Go
        </a>{" "}
        app on your phone, then scan the QR code below:
      </p>
      <img
        src="/atlas-mobile-intro-qr.png"
        alt="Step counter QR Code"
        className="w-64 h-auto mt-6"
      />
    </div>
  );
}
