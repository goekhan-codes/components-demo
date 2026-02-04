import { Fragment } from "react";

function GreetUser({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function Message({ message }) {
  return <p>{message}</p>;
}

export default function Greeting({ name, message }) {
  return (
    <>
      <GreetUser name={name} />
      <Message message={message} />
    </>
  );
}
