type Props = {
  text: string;
};

export default function BootMessage({ text }: Props) {
  return (
    <p className="text-green-400 leading-8 tracking-wide">
      {text}
    </p>
  );
}