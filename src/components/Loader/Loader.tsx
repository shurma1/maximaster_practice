import classNames from './Loader.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
	return (
		<div className={classNames.Loader}>
			<CircularProgress />
		</div>
	);
};

export default Loader;
