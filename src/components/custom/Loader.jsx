import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-20 h-10 overflow-hidden bg-transparent">
        <div
          className="absolute top-[4px] left-[-40px] w-9 h-5 
            [animation:slide-left_2s_linear_infinite] 
            bg-[radial-gradient(farthest-side,_#fff_96%,_transparent)_100%_100%/30%_60%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_70%_0/50%_100%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_0_100%/36%_68%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_27%_18%/26%_40%,_linear-gradient(#fff_0_0)_bottom/67%_58%]
            bg-no-repeat"
        >
          <img src="./loading_ani.jpg" alt="" />
        </div>
        <div
          className="absolute top-[15px] left-[-40px] w-9 h-5 
            [animation:slide-far_2s_linear_infinite] 
            bg-[radial-gradient(farthest-side,_#fff_96%,_transparent)_100%_100%/30%_60%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_70%_0/50%_100%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_0_100%/36%_68%,_radial-gradient(farthest-side,_#fff_96%,_transparent)_27%_18%/26%_40%,_linear-gradient(#fff_0_0)_bottom/67%_58%]
            bg-no-repeat"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
