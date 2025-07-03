
import { XCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center max-w-md mx-auto shadow-sm">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <XCircle className="w-6 h-6 text-red-500" />
      </div>
      <p className="font-medium text-red-800 mb-1">Something went wrong</p>
      <p className="text-sm text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;
