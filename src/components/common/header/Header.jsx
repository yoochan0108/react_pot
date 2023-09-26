import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul>
				<li>
					<NavLink to='/department' activeClassName={styles.active}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={styles.active}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={styles.active}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeClassName={styles.active}>
						Members
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={styles.active}>
						Contact
					</NavLink>
				</li>
			</ul>
		</header>
	);
}
