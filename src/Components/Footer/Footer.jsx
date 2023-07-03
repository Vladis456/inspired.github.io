import style from './Footer.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { Category } from './Category/Category.jsx';
import { Social } from './Social/Social.jsx'
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Development.jsx';
export const Footer = () => (
	<footer>
		<Container className={style.container}>
			<Category>

			</Category>
			<Social>

			</Social>
			<Contacts>

			</Contacts>
			<Copyright>

			</Copyright>
			<Development>

			</Development>
		</Container>
	</footer>
)