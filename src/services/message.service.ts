import { toast } from 'react-toastify';

export class MessageService {
  static success(message: string) {
    console.log('message', message);
    toast.success(message);
  }

  static error(message: string) {
    toast.error(message);
  }

  static warning(message: string) {
    toast.warning(message);
  }

  static info(message: string) {
    toast.info(message);
  }
}