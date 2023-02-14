import { useAppSelector } from '../../hooks';
import './error-message.css';

export function ErrorMessage() {
  const { error } = useAppSelector((state) => state);

  return (error)
    ? <div className="error-message">{error}</div>
    : null
}
