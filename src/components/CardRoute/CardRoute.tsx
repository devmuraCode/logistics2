import Image, { StaticImageData } from "next/image";
import styles from "./CardRoute.module.scss";
import { FC } from "react";

interface IProps {
	image: string | StaticImageData; // Изображение или иконка
	text: string; // Текст
}

export const CardRoute: FC<IProps> = ({ image, text }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.icon}>
				<Image src={image} alt="Icon" />
			</div>
			<span className={styles.text}>{text}</span>
		</div>
	);
};
