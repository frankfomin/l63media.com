import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  services: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  services,
  message,
}) => (
  <div>
    <h1>Hej mitt namn är: {name}</h1>
    <h2>Min mail är: {email}</h2>
    <h3>Jag söker dessa tjänster: {services}</h3>
    <p>Mitt meddelande är: {message}</p>
  </div>
);
