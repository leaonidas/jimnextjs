import cn from 'classNames';

export default function Button({ children, ...props }) {
  const className = cn({
    btn: true,
    'btn--primary': props.variant !== undefined,
    'btn--secondary': props.variant === 'secondary',
    [props.className]: props.className !== undefined
  });

  return <button className={className}>{children}</button>;
}
