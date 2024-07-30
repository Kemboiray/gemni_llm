import { FaInfoCircle } from "react-icons/fa";

function Body() {
  return (
    <div className="mx-12 mt-4">
      <div className="border rounded-md min-h-96 shadow-md py-6 px-4">
        <div className="flex justify-between">
          <div className="flex border bg-[#f3f4f5] rounded gap-4 px-4 py-3">
            <FaInfoCircle className="my-auto" size={40} />
            <span className="font-semibold text-3xl">Question No.1 of 5</span>
          </div>
          <div className="flex border bg-[#f3f4f5] rounded text-3xl text-center">
            <div className="my-auto px-7">01</div>
            <div className="border-x h-full flex px-7">
              <div className="my-auto">32</div>
            </div>
            <div className="my-auto px-7">35</div>
          </div>
        </div>
        <div className="border bg-[#f3f4f5] shadow-lg my-7 rounded px-7 py-5 font-semibold text-xl">
          Q. Which part from the JoJo's Bizarre Adventure manga is about a horse
          race across America?
        </div>
      </div>
      ;
    </div>
  );
}

export default Body;
