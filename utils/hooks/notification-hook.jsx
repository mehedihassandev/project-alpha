import React, {
  createContext,
  useCallback,
  useContext,
  useState
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const NotificationContext = createContext(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }

  return context;
};

export const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState(false);

  const showNotification = useCallback(
    (newMessage, newSeverity) => {
      setMessage(newMessage);
      setSeverity(newSeverity);
      setOpen(true);
      setTimeout(() => setOpen(false), 5000); // Auto-hide after 5 seconds
    },
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {open &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 w-full max-w-md text-white bg-transparent rounded-lg shadow-lg z-50">
            <div className={`flex items-center ${severity ? 'bg-green-500' : 'bg-red-500'} px-7 py-5 rounded-lg`}>
              <svg className="w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={severity ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'} />
              </svg>
              <span>{message}</span>
              <button onClick={handleClose} className="ml-auto text-white">
                &times;
              </button>
            </div>
          </div>,
          document.body
        )}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
