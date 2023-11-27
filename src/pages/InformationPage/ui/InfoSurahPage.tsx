import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cls from './InformationPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { makkah } from '@/shared/assets/SuraInfo';
import { InformationPageSurah } from '../types/InfoSurah';
import { Loader } from '@/widgets/Loader';
// import { StateSchema, StateSchema } from '@/app/providers/StoreProvider';

const InfoSurahPage = () => {
  interface Name {
    name: string;
  }
  const param: any = useParams();

  interface Data {
    chapter_id: {
      name_simple: string;
      count_verse: '';
      revelation_place: string;
      translated_names: Name[];
    };
    text: string;
  }

  const data = useSelector((state: InformationPageSurah) => {
    if (state) {
      console.log(
        state?.readingTranslateKril?.data[param?.id]?.data.data[0]
          .chapter_id[0],
        'vjvjvjvjvj',
      );
    }
  });

  
  console.log(data, 'info');

  return (
    <div style={{ marginTop: '30px', padding: '20px' }}>
      <Suspense fallback={<Loader />}>
        <div>
          <div className={classNames(cls.TitleData)}>
            <div className={classNames(cls.DataName)}>Sura nomi : Fotiha</div>
            <div className={classNames(cls.Data)}>Oyatlar soni: 7</div>
            <div className={classNames(cls.Data)}>Vahiy joyi: Makka</div>
          </div>
          <hr />
          <div className={classNames(cls.MainText)}>
            <img
              src={makkah}
              width={200}
              className={classNames(cls.imgLeft)}
              alt="#"
            />
            <p className={classNames(cls.Block)}>
              Makkada nozil bo‘lgan, 7 oyatdan iborat.Bu suraning bir necha nomi
              bo‘lib, ulardan biri «Fotiha», yaʼni «ochuvchi» deganidir. Chunki
              Qurʼoni Karim ushbu sura ila ochiladi. Fotiha surasi juda ham
              fazilatli sura bo‘lib, bu haqda bir qancha rivoyatlar
              keltirilgan.Imom Ahmad ibn Hanbal rivoyat qilgan hadisi sharifda
              aytiladi:«Ubay ibn Kaʼb Nabiy alayhissalomning huzurlarida Fotiha
              surasini o‘qidilar. Shunda Nabiy sollallohu alayhi
              vasallam:«Mening jonim tasarrufida bo‘lgan Zot bilan qasamki,
              Tavrotda ham, Injilda ham, Zaburda ham, Furqonda (Qurʼonda) ham
              bunga o‘xshash nozil qilinmagan», – dedilar.Fotiha surasi
              oyatlarining tafsiriga kirishishdan oldin Qurʼoni Karimga oid eng
              mashhur ikki istiloh – oyat va sura so‘zlarining lug‘aviy va
              istilohiy maʼnolari bilan tanishib olsak, maqsadga muvofiq
              bo‘ladi.«Oyat» so‘zining bir necha lug‘aviy maʼnosi bor:1.
              «Mo‘jiza».Alloh taolo Baqara surasida: «Banu Isroildan ularga
              qanchadan-qancha ochiq-oydin oyat(mo‘jiza)larni berganimizni
              so‘ra», – degan (211-oyat).2. «Belgi-alomat».Alloh taolo Baqara
              surasida: «Albatta, uning podshohligining oyati (belgisi) –
              sizlarga ichida Robbingizdan sakina va Oli Musodan hamda Oli
              Horundan qoldiq bor sandiq kelishidir», – degan (248-oyat).3.
              «Ibrat».«…Toki o‘zingdan keyingilarga oyat (ibrat) bo‘lgin…»
              (Yunus surasi, 92-oyat).4. «Ajoyib ish».Alloh taolo Muʼminun
              surasida: «Ibn Maryamni va uning onasini oyat (ajoyib ish) qildik
              va ikkovlarini oqar suvli qarorgoh tepalikka joyladik», – degan
              (50-oyat).5. «Burhon, dalil».Alloh taolo Rum surasida: «Va
              osmonlaru erning yaratilishi hamda tillaringiz va ranglaringizning
              turlicha bo‘lishi Uning oyat(burhon)laridandir», – degan
              (22-oyat).6. «Jamoat».Arablarda «Qavm oyati – jamoasi bilan
              chiqdi» degan gap bor.7. Qurʼon oyati.Ulamolar istilohida esa oyat
              Qurʼon surasiga kirgan, boshlanishi va tugashi belgili so‘zlar
              toifasidir.Shu bilan birga, Qurʼoni Karimning har bir oyati
              yuqoridagi lug‘aviy maʼnolarni o‘z ichiga olgan bo‘ladi. Ha,
              Qurʼoni Karimning har bir oyati mo‘jiza, ibrat, ajoyib ish,
              belgi-alomat, burhon, dalil, harf va so‘zlar jamoasi hamda Alloh
              taoloning qudrati dalilidir.Qurʼoni Karimning har bir oyati, uning
              avvali va oxiri haqidagi ilmni Alloh taolodan Jabroil alayhissalom
              o‘rgangan. U kishidan Nabiy alayhissalom, u zotdan esa musulmonlar
              o‘rganganlar.Qurʼoni Karimdagi eng qisqa oyat «Ya sin» bo‘lib,
              ikki harfdan iboratdir.Eng uzun oyat esa Baqara surasidagi «Qarz
              oldi-berdisi» oyatidir.Oyatlarni bir-biridan ajrata bilish,
              ularning boshlanish va tugash joylarini anglab etish ularning
              maʼnolarini yaxshi tushunib etishda va boshqa bir qancha ishlarda
              yordam beradi.Qurʼoni Karimda «oyat» so‘zi ko‘plab takrorlangan.
              «Oyat» so‘zi baʼzi bir joylarda yuqorida zikr qilingan
              maʼnolarning hammasini, ikkinchi bir joyda ikki-uchtasini,
              uchinchi joyda esa faqat bittasini ifoda etib kelgan. Ushbu nozik
              farq anglab etilgandagina maʼno to‘g‘ri tushuniladi.«Sura» so‘zi
              lug‘atda «qo‘rg‘on», «manzil» va «sharaf» degan maʼnolarni
              anglatadi.Ulamolarimiz istilohida esa sura Qurʼon oyatlarining
              boshlanishi va tugashi belgilangan mustaqil toifasidir.Boshqacha
              qilib aytadigan bo‘lsak, Qurʼon oyatlarining qo‘rg‘on ila
              o‘ralgandek bir toifasiga sura deyiladi.Qurʼoni Karimdagi eng
              qisqa sura Kavsar surasi bo‘lib, uch oyatdan, eng uzun sura esa
              Baqara surasi bo‘lib, 286 oyatdan iboratdir.
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default InfoSurahPage;
// (state: StateSchema) =>
