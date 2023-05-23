export const Footer = () => {
  return (
    <footer className="flex h-80 w-full flex-col justify-evenly text-center">
      <div className="flex flex-col justify-evenly">
        contact
        <a href="mailto:botos.levente2007@gmail.com">
          botos.levente2007@gmail.com
        </a>
        <a href="tel:+36706121894">+36 70 612 1894</a>
      </div>
      <div>follow</div>
      <div>
        Copyright © Barber 2023 || Made by:{" "}
        <a href="https://leventebotos.github.io" target="_blank">
          Botos Levente
        </a>
      </div>
    </footer>
  );
};
