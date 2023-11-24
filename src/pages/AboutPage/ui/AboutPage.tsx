/* eslint-disable camelcase */
/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import cls from './About.module.scss';

const AboutPage = () => {
  const { t } = useTranslation('about');

  const maqsad = 'Maqsadimiz';
  const muallif = 'Muallif';

  const Paragraph_1_1 =
    "Ushbu sayt asoschisi Sardorxon Jahongir 1977 yil Toshkent shahrida tavallud topgan. Imom Buxoriy nomli Toshkent islom instituti va Mirzo Ulug'bek nomidagi O'zbekiston Milliy universitetini tugallab, islomshunos va filolog mutaxassisligi bo'yicha bakalavr darajasini olgan. ";
  const Paragraph_1_2 =
    "Dastlabki ilmiy faoliyatini O'zbekiston Milliy universitetida arab tilidan saboq berish bilan boshlagan. Shuningdek, Misr Аrab respublikasi elchixonasi qoshidagi fan va ta'lim markazining o'quv bo'limida faoliyat olib borgan. Nufuzli nashriyotlarda rahbar va bosh muharrir lavozimlarida ishlab mamlakatimizda ko'plab ilmiy-ma’rifiy kitoblarga noshirlik qilgan. ";
  const Paragraph_1_3 =
    "Ilmiy faoliyatini davom ettirish maqsadida bir qancha xorijiy davlatlarda malaka oshirgan. Jumladan,so'nggi o'n yil mobaynida Turkiya respublikasida bo'lib u yerdagi Kafkaz davlat universiteti dinshunoslik fakultetida “Tafsirshunoslik” yo'nalishi bo'yicha magistr darajasini olgan hamda nomzodlik dissertatsiyasini yoqlagan.";
  const Paragraph_1_4 =
    "Mazkur universitetda dars berish bilan birga xalqaro aloqalar bo'limida ham faoliyat yurgizgan. U xorijda bir qancha ilmiy-amaliy konferensiyalar tashkilotchisi va qatnashchisi hisoblanadi. Uning muallifligida chet ellarda ko'plab ilmiy maqolar va kitoblar nashr qilingan. Sardorxon Jahongir xalqaro miqyosada tashkil etilgan Turkiston sayyidlari va eshonlari nomli shajaralarni tadqiq qilish va tasdiqlash tashkilotining muassisi va raisi hisoblanadi.";

  const Paragraph_1_5 =
    "Ayni damda respublikamizdagi “Turon” fan-ta’lim markazi tarmoqlarining rahbari hisoblanib, arab tili, Hadis va Qur’oni Karim yo'nalishida saboqlar berib kelmoqda. Shuningdek, Qur’oni Karim tafsiriga doir ilmiy izlanishlar olib bormoqda. Islomshunos va tilshunois olim Sardorxon Jahongir arab, fors, ingliz, rus va turk tillarini yaxshi o'zlashtirgan.";

  const paragraph2 =
    "Milliy qadriyatlarimiz hamda maʼnaviy boy merosimizni tiklash va ularnipuxta oʼrganish, uning mazmun-mohiyati va ahamiyatini xalqimiz oʼrtasidatargʼib etish, ajdodlarimiz bo'lgan Imom Buxoriy, Nasafiy va Zamaxshariysingari ulamolar izidan borish, ulardan bizlarga meros bo'lib kelayotganva saqlanayotgan tarixiy hamda nodir qoʼlyozmalarni avlodlargayetkazish, ajdodlarimiz hayoti, axloqi va yuksak maʼnaviyatiniifodalovchi matnlarni xalqimizga yetkazib, yoshlarimiz qalbida ularqoldirgan merosga ehtirom, izzat va muhabbat tuygʼusini shakllantirishdir.";

  return (
    <div data-testid="AboutPage">
      {/* {t('О сайте')} */}
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
        <p className={cls.Paragraph2}>{paragraph2}</p>
      </div>
    </div>
  );
};

export default AboutPage;
