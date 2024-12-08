import Container from '@/components/Container'
import styles from './ReviewSection.module.scss'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import img from '@/assets/rewiev2.svg'
export const ReviewSection = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.content}>
                <div>
                    <div className={styles.reviews}>
                        <h1>Остались вопросы?
                        Свяжитесь с нами</h1>
                        <Button>Связаться с нами</Button>
                    </div>
                    <Image src={img} alt=''/>
                </div>
            </div>
        </Container>
    </div>
  )
}
