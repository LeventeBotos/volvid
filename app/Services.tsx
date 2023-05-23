export const Services = () => {
  return (
    <div className="flex flex-col p-3 text-center md:p-10">
      <div className="p-5 text-3xl font-bold">Ajánlataink</div>
      <div className="flex flex-col justify-evenly md:flex-row">
        <div className="w-2/3 self-center md:w-1/3">
          <div className="card flex flex-col">
            <img
              alt="Hajvágás kép"
              loading="lazy"
              className=" h-1/2 w-full rounded-t-3xl object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipOaG5z2k-xDqQ6j8IEZoxVQhmja5JeyNd83IxCM=s1360-w1360-h1020"
            />
            <p className="text-2xl">Hajvágás</p>
            <p className="text-primary">1500Ft</p>
          </div>
        </div>
        <div className="w-2/3 self-center md:w-1/3">
          <div className="card flex  flex-col">
            <img
              alt="Stilizálás kép"
              loading="lazy"
              className="h-1/2 w-full rounded-t-3xl object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipNsoPrE51B7QTKw_-k4k9YM9LhbIsHSlS2Ql9I2=s1360-w1360-h1020"
            />
            <p className=" text-2xl">Stilizálás</p>
            <p className="text-primary">1500Ft</p>
          </div>
        </div>
        <div className="w-2/3 self-center md:w-1/3">
          <div className="card flex  flex-col">
            <img
              alt="Borotválás kép"
              loading="lazy"
              className="h-1/2 w-full rounded-t-3xl object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipM1MJvEvbM7722YIKCjO37dp2uKTxdvXM1dQIFy=s1360-w1360-h1020"
            />
            <p className="text-2xl">Borotválás</p>
            <p className="text-primary">1500Ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};
