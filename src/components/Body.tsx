import { FaInfoCircle } from "react-icons/fa";

const answers = ["Alpha", "Lambda", "Omega", "Sigma"];
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
				<div className="text-[#666666] font-semibold text-lg">
					Please choose one of the following answers:
				</div>
				<div className="border-y py-4 my-5">
					<div className="border rounded px-5 py-1">
						<ol
							type="A"
							className="list-[upper-alpha] list-inside marker:font-semibold text-lg divide-y"
						>
							{answers.map((item, key) => (
								<li key={key} className="py-2 capitalize hover:bg-[#f3f4f5]">
									{item}
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
			;
		</div>
	);
}

export default Body;
