const FoodCard = (props) => {
  const { imgSrc, discount, name, Ncomment, discountNum, address } = props;
  return (
    <div
      style={{ boxShadow: "0 14px 20px rgb(56 60 71 / 10%)" }}
      className="border border-gray-200 relative cursor-pointer w-[90%] h-[95%] rounded-lg"
    >
      <div className="topCard relative h-3/5 rounded-t-lg">
        <img className="rounded-t-lg z-10" alt="food" src={imgSrc.mainfood} />
        <div className="storeLable bg-white rounded-xl w-12 h-16 absolute bottom-4 right-2 z-20">
          <img
            className="w-full h-full rounded-xl"
            alt="lable"
            src={imgSrc.lable}
          />
        </div>
      </div>
      <div className="bottomCard h-2/5">
        <div className="foodName  text-right p-2">
          <p className="font-bold">{name}</p>
        </div>
        <div>
          <div className="flex justify-end">
            <span className="mr-2 text-[#888]">{address}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#888"
              className="mt-1 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
        </div>
        <div className="text-left text-sm pl-2 text-[#888]">
          <span>{`(${Ncomment}نظر)`}</span>
        </div>
      </div>

      <div
        style={{ boxShadow: "0 5px 10px rgb(56 60 71 / 10%)" }}
        className="absolute top-32 left-2 z-30 bg-white h-10 w-20 rounded-xl"
      >
        <span className="text-sm">
          45-25
          <p className="text-sm text-[#888] relative -top-1">دقیقه</p>
        </span>
      </div>
      <>
        {discount ? (
          <div className="bg-red-500 rounded-full text-center flex justify-center items-center w-10 h-10 absolute top-2 left-3">
            <span className="text-white text-sm">{discountNum}</span>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default FoodCard;
