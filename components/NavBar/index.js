import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
	IconGauge,
	IconCalendarStats,
	IconLogout,
	IconUser,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Link from 'next/link';
import { useStore } from "../../store"

function NavbarLink({ icon: Icon, label, active, onClick }) {
	return (
		<Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
			<UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
				<Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
}

const mockdata = [
	{ icon: IconGauge, label: 'Dashboard', screen: 'dashboard' },
	{ icon: IconCalendarStats, label: 'Calendar', screen: 'calendar' },
	{ icon: IconUser, label: 'Account', screen: 'account' },
];

export function NavBar() {
	const [active, setActive] = useState(2);
	const { updateScreen } = useStore()
	const setScreen = (link, index) => {
		setActive(index)
		updateScreen(link)
	}

	const links = mockdata.map((link, index) => (
		<NavbarLink
			{...link}
			key={link.label}
			active={index === active}
			onClick={() => setScreen(link.screen, index)}
		/>
	));

	return (
		<nav className={classes.navbar}>
			<Center>
				logo
			</Center>

			<div className={classes.navbarMain}>
				<Stack justify="center" gap={0}>
					{links}
				</Stack>
			</div>

			<Stack justify="center" gap={0}>
				<Link
					href={'/'}
				>
					<NavbarLink icon={IconLogout} label="Logout" />
				</Link>
			</Stack>
		</nav>
	);
}