import './header.scss';

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
