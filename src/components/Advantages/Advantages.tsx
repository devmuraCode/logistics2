import Image from "next/image";
import Container from "../Container";
import styles from "./Advantages.module.scss";
import advage1 from '@/assets/advan1.png'
export const Advantages = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.advantages_title_catd}>
          <div>
            <div className={styles.general_title}>
              <h1>Наши преимущества</h1>
            </div>
            <p>
              Мы привержены работе с крупными объёмами – Юридические лица, имеют
              возможность работать с грузами, начальный вес которых – 100 кг.
              Это позволяет клиентам с малыми объёмами комфортно начать
              партнёрство с Китаем. Оплата за предоставляемые услуги, работа с
              документами, «трекинг» перевозки, а также персональное
              сопровождение менеджера - все эти аспекты гарантируют падежное и
              качественное сотрудничество.
            </p>
          </div>
        </div>
        <div className={styles.tracking}>
          <div className={styles.inner}>
            <div className={styles.content_card}>
                <h2>Отслеживание груза</h2>
                <p>В личном кабинете Вы сможете отслеживать даже мелкие грузы из Китая на всех этапах доставки</p>
            </div>
            <Image src={advage1} alt=""/>
          </div>
        </div>
      </Container>
    </div>
  );
};
