import classNames from './Loader.module.scss';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const Loader = () => {
	return (
		<div
			className={classNames.Loader}
		>
			<Spin
				indicator={<LoadingOutlined spin />}
				size="large"
			/>
		</div>
	);
};

export default Loader;
