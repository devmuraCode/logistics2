import Container from "@/components/Container";
import styles from "./ReviewSection.module.scss";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "@/assets/rew3.svg";

export const ReviewSection = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.content}>
					<div className={styles.reviews}>
						<h1>
							Остались вопросы? <br />
							Свяжитесь с нами
						</h1>
						<Button>Связаться с нами</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};
