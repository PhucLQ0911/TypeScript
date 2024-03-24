import Select from './Select';

function SearchDetail() {
	return (
		<div className="content mx-80 py-10">
			<div className=" bg-white rounded-md">
				<div className="flex items-center justify-center">
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/XeKhach.svg" />
						<p>Xe khách</p>
					</div>
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/MayBay.svg" />
						<p>Máy bay</p>
					</div>
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/TauHoa.svg" />
						<p>Tàu hỏa</p>
					</div>
				</div>
				<hr />
				<div className="flex">
					<div className="flex w-10/12 items-center justify-between m-5 rounded-md border border-text-slate-300-600">
						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/pickup.svg" />
							</div>
							<div>
								<Select title="Nơi xuất phát" />
							</div>
						</div>

						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/dropoff.svg" />
							</div>
							<div>
								<Select title="Nơi đến" />
							</div>
						</div>

						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/event.svg" />
							</div>
							<div>
								<Select title="Ngày đi" />
							</div>
						</div>

						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/event.svg" />
							</div>
							<div>
								<Select title="Thêm ngày về" />
							</div>
						</div>
					</div>
					<div>
						<a
							className="w-36 bg-yellow-400 h-14 my-5 mr-4 text-center rounded-md pt-4 font-medium"
							type="button"
						>
							Tìm kiếm
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SearchDetail;
