import Image from "next/image";
import Container from "../Container";
import styles from "./Advantages.module.scss";
import advage1 from '@/assets/advan1.png'
import advage2 from '@/assets/advage2.jpg'
import advage3 from '@/assets/advage3.png'
import { CardMain } from "../CardMain/CardMain";
import advage4 from '@/assets/solar_document-linear.svg'
import advage5 from '@/assets/iconoir_hand-cash.svg'
import advage6 from '@/assets/support.svg'
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
        <div className={styles.img_group}>
          <Image src={advage2} alt=""/>
          <Image src={advage3} alt=""/>
        </div>
        <div className={styles.card_group}>
          <CardMain title="Оформление документов" description="Мы для вас подготовим закрывающие экспедиторские документы и при необходимости поможем с разрешительной документацией" image={advage5}/>
          <CardMain title="Персональный менеджер" description="На всех этапах сделки Вас будет консультировать персональный менеджер" image={advage4}/>
          <CardMain title="Оплата за услуги" description="С ИП и ООО мы работаем по договору поставки с возможностью оплаты российским рублями на расчетный счет исполнителя" image={advage6}/>
          
        </div>
      </Container>
    </div>
  );
};
