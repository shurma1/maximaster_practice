import {FC, ReactElement, useState} from "react";
import {Layout as ANTDLayout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {PieChartOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";

interface ILayoutProps {
	children: ReactElement | ReactElement[];
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
];

const Layout: FC<ILayoutProps> = ({children}) => {
	
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div>
			<ANTDLayout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<div className="demo-logo-vertical" />
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
				</Sider>
			</ANTDLayout>
			<ANTDLayout>
				<Content style={{ margin: '0 16px' }}>
					{children}
				</Content>
			</ANTDLayout>
		</div>
	);
};

export default Layout;
