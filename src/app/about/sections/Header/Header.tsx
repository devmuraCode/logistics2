import styles from './Header.module.scss'
import Container from '@/components/Container'
import { CardRoute } from '@/components/CardRoute/CardRoute'
import img from '@/assets/telephone.svg'
import about from '@/assets/about.svg'
import docs from '@/assets/docs.svg'
import news from '@/assets/news.svg'

export const Header = () => {
  return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.cardGroup}>
					<CardRoute image={img} text={"Контакты"} />
                    <CardRoute image={about} text={"О нас"} />
					<CardRoute image={docs} text={"Документы"} />
					<CardRoute image={news} text={"Новости"} />
				</div>
			</Container>
		</div>
	);
}
