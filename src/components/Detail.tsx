function Detail() {
	return (
		<div className="flex justify-between py-8 pl-5 pr-5 bg-white rounded-lg">
			<div className="flex">
				<div className="mr-5">
					<img src="../../images/AnhChuyeNDi.png" />
				</div>
				<div>
					<p className="font-semibold text-base">Hải Phòng Travel(Đất cảng)</p>
					<div className="flex mt-16">
						<div className="me-2">
							<img src="../../images/MuiTen.svg" />
						</div>
						<div>
							<div className="flex">
								<p className="font-semibold text-base mr-3">19:00</p>
								<span>Hà nội</span>
							</div>
							<div className="my-1">1h30</div>
							<div className="flex">
								<p className="font-semibold text-base mr-3">20:30</p>
								<span>Hải phòng</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="ml-4">
				<div>
					<p className="font-semibold text-xl text-sky-500">Từ 230.000đ</p>
				</div>
				<div className="my-4 ml-7">
					<img src="img/discount.png" />
				</div>
				<div>
					<p className="text-sm font-normal ml-10">Còn 11 chỗ</p>
				</div>
				<div>
					<button className="w-28 bg-yellow-500 my-5 h-9 text-center text-sm font-medium">
						Chọn chuyến
					</button>
				</div>
			</div>
		</div>
	);
}
export default Detail;
