// Simple toast utility that works without context
type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  duration?: number;
}

// Simple in-memory toast system
let toastContainer: HTMLDivElement | null = null;
let toastId = 0;

const createToastContainer = () => {
  if (toastContainer) return toastContainer;
  
  toastContainer = document.createElement('div');
  toastContainer.className = 'fixed top-4 right-4 z-50 space-y-2 pointer-events-none';
  document.body.appendChild(toastContainer);
  return toastContainer;
};

const getToastStyles = (type: ToastType) => {
  const baseStyles = "flex items-center gap-3 p-4 rounded-lg shadow-lg transition-all duration-300 transform max-w-md pointer-events-auto";
  
  switch (type) {
    case 'success':
      return `${baseStyles} bg-green-50 border border-green-200 text-green-800`;
    case 'error':
      return `${baseStyles} bg-red-50 border border-red-200 text-red-800`;
    case 'warning':
      return `${baseStyles} bg-yellow-50 border border-yellow-200 text-yellow-800`;
    case 'info':
      return `${baseStyles} bg-blue-50 border border-blue-200 text-blue-800`;
    default:
      return `${baseStyles} bg-gray-50 border border-gray-200 text-gray-800`;
  }
};

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return `<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>`;
    case 'error':
      return `<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>`;
    case 'warning':
      return `<svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>`;
    case 'info':
      return `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
    default:
      return '';
  }
};

const showToast = (type: ToastType, message: string, options: ToastOptions = {}) => {
  const { duration = 5000 } = options;
  const container = createToastContainer();
  ++toastId;
  
  const toastElement = document.createElement('div');
  toastElement.className = getToastStyles(type) + ' translate-x-full opacity-0';
  toastElement.innerHTML = `
    ${getIcon(type)}
    <span class="flex-1 text-sm font-medium">${message}</span>
    <button class="text-gray-500 hover:text-gray-700 transition-colors" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  `;
  
  container.appendChild(toastElement);
  
  // Animate in
  setTimeout(() => {
    toastElement.className = getToastStyles(type);
  }, 50);
  
  // Auto remove
  if (duration > 0) {
    setTimeout(() => {
      if (toastElement.parentElement) {
        toastElement.className = getToastStyles(type) + ' translate-x-full opacity-0';
        setTimeout(() => {
          if (toastElement.parentElement) {
            toastElement.remove();
          }
        }, 300);
      }
    }, duration);
  }
};

export const toast = {
  success: (message: string, options?: ToastOptions) => showToast('success', message, options),
  error: (message: string, options?: ToastOptions) => showToast('error', message, options),
  info: (message: string, options?: ToastOptions) => showToast('info', message, options),
  warning: (message: string, options?: ToastOptions) => showToast('warning', message, options)
};