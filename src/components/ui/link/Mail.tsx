"use client";

export default function Mail() {
  const email = "AdamSkold@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  };

  return (
    <div>
      <a href={`mailto:${email}`} onClick={handleEmailClick}>
        {email}
      </a>
    </div>
  );
}
