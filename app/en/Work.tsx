export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">Work with Us!</p>
      <div className=" flex w-full flex-col gap-3 p-5 text-xl md:w-1/2">
        <div className="flex justify-between">
          <p>
            If you would like to work at one of the countrys largest material
            testing companies and would like to try yourself abroad as well,
            then Volvid Ltd. is a great opportunity for you.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p>
              Do you already have a secondary education degree and are you
              interested in material testing?{" "}
            </p>
            <p>
              We take care of your training and provide long-term job
              opportunities, as well as continuous further education.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>
            You need to bring a positive attitude and a willingness to learn.
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            If you are already a material tester and have valid documentation,
            we can even provide you with long-term job opportunities in Germany
            and Austria.
          </p>
        </div>
      </div>
    </section>
  );
};
