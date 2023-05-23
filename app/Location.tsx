export const Location = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <iframe
        title="helyzet"
        className=" h-64 w-full rounded-xl md:w-2/3"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.5232031359953!2d19.05738200603322!3d47.508487456532386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc72a8d744df%3A0x2d6405e36dfb18fa!2zYUJvcmLDqWx5!5e0!3m2!1shu!2shu!4v1634060743679!5m2!1shu!2shu"
      />
      <div className="flex w-full flex-col justify-evenly text-center md:w-1/3">
        <p className="text-2xl font-bold">Budapest,</p>
        <p className="text-xl">Teréz krt. 50, 1066</p>
        <a
          href="https://www.google.com/maps/dir//aborb%C3%A9ly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4741dc72a8d744df:0x2d6405e36dfb18fa?sa=X&ved=2ahUKEwjV-tnqlof_AhUPgP0HHbG8DAMQ9Rd6BAhkEAU"
          target="_blank"
          className="self-center"
        >
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="rounded-full">Útvonalterv</span>
          </button>
        </a>
      </div>
    </div>
  );
};
