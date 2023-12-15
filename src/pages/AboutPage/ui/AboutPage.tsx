/* eslint-disable camelcase */
/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import cls from './About.module.scss';

const AboutPage = () => {
  const { t } = useTranslation();

  const muallif = t('muallif');
  const maqsad = t('maqsadimiz');
  const paragraph_2 = t('Paragraph_2');
  const Paragraph_1_1 = t('Paragraph_1_1');
  const Paragraph_1_2 = t('Paragraph_1_2');
  const Paragraph_1_3 = t('Paragraph_1_3');
  const Paragraph_1_4 = t('Paragraph_1_4');
  const Paragraph_1_5 = t('Paragraph_1_5');

  return (
    <div data-testid="AboutPage">
      <div className={cls.AboutWrapper}>
        <p className={cls.Title}>{muallif}</p>
        <div className={cls.Contain}>
          <img
            className={cls.ImgProfile}
            src="http://iqro-quran.uz/developmentBackend/uploads//e3444293-1d02-492e-a574-26f9bcd613b7-IMG_0491_(1).jpg"
            alt="Docktor"
          />

          <p className={cls.Paragraph}>{Paragraph_1_1}</p>
          <p className={cls.Paragraph}>{Paragraph_1_2}</p>
          <p className={cls.Paragraph}>{Paragraph_1_4}</p>
          <p className={cls.Paragraph}>{Paragraph_1_3}</p>
          <p className={cls.Paragraph}>{Paragraph_1_5}</p>
        </div>

        <p className={cls.Title}>{maqsad}</p>
        <p className={cls.Paragraph2}>{paragraph_2}</p>
      </div>
    </div>
  );
};

export default AboutPage;
