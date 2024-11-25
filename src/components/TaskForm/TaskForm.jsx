import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import css from './TaskForm.module.css';

export default function TaskForm() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addTask({
        id: crypto.randomUUID(),
        completed: false,
        text: form.elements.text.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.field}
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
}
