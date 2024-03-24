import Detail from './Detail';
import SearchDetail from './SearchDetail';
import Sort from './Sort';

function ListDetail() {
	return (
		<div>
			<div>
				<SearchDetail />
			</div>
			<div className="content mx-80 py-6 flex">
				<Sort />

				<div className="content-detail w-full">
					<Detail />
					<Detail />
					<Detail />
					<Detail />
				</div>
			</div>
		</div>
	);
}
export default ListDetail;
