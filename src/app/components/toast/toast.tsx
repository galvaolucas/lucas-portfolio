import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IToast } from './types';

export const Toast = ({ children }: IToast): React.ReactElement => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}