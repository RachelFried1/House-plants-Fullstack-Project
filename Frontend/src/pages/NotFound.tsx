const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
        >
          <circle cx="60" cy="60" r="60" fill="#DCFCE7" />
          <path
            d="M60 35C52 35 45 42 45 50C45 62 60 80 60 80C60 80 75 62 75 50C75 42 68 35 60 35Z"
            fill="#22C55E"
          />
          <ellipse cx="60" cy="50" rx="10" ry="7" fill="#BBF7D0" />
          <circle cx="54" cy="48" r="2" fill="#166534" />
          <circle cx="66" cy="48" r="2" fill="#166534" />
          <path
            d="M56 56C57 57 59 58 60 58C61 58 63 57 64 56"
            stroke="#166534"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="text-5xl font-extrabold text-green-700 mb-2">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

