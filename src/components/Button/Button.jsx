import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
