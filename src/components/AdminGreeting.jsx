import Message from "./Message";

export default function AdminGreeting(props) {
  return (
    <>
      <h1>Hey Admin {props.name}!</h1>
      <Message />
    </>
  );
}
