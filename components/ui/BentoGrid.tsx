import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
  id
}: {
  className?: string;
  children?: React.ReactNode;
  id?: string
}) => {


  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto pb-4",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subTitle,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  subTitle?: string;
}) => {
  const leftLists = [ "Javascript","NextJS", "Typescript"];
  const rightLists = ["NestJs", "MongoDb", "ExpressJs"];
  return (
    <div
    className={cn(
      // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
      "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
      className
    )}
      style={{
        //    generated the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`h-full`}>
      <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
      
      
    
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
        
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg ${ id === 2 ? "text-sm lg:text-2xl" : "text-lg lg:text-3xl"} max-w-96 font-bold z-10`}
          >
            {title}
            {/* <br/>{subTitle && <span>{subTitle}</span>} */}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-2 py-1 px-2   rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                <span className="lg:py-3 lg:px-2 py-1 px-2   rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
