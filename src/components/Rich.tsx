export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : <span key={index}>{part}</span>,
      )}
    </>
  );
}
