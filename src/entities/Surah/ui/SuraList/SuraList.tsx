import cls from './SuraList.module.scss';
import { SurahData } from '../../model/consts/SurahData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelectedSuraActions } from '../../model/slice/selectedSuraSlice';
import { useSelectedSuraValue } from '../../model/selectors/getSelectedSuraValue/getSelectedSuraValue';
import { SuraSchema } from '../../model/types/selectedSuraSchema';

interface SuraListProps {
  className?: string;
}

const SuraList = ({ className }: SuraListProps) => {
  const selectedSura = useSelectedSuraValue();
  const { currentSura } = useSelectedSuraActions();

  return (
    <div className={classNames(cls.SuraList, {}, [className])}>
      {SurahData?.map((element: SuraSchema) => (
        <div
          key={element.suraId}
          className={classNames(
            cls.SuraList__item,
            { [cls.active]: element.suraId === selectedSura?.suraId },
            [className],
          )}
          onClick={() => currentSura(element)}
        >
          <p className={classNames(cls.SuraList__suraNumber, {}, [])}>
            {element.suraId}
          </p>

          <p className={classNames(cls.SuraList__suraName, {}, [])}>
            {element.nameLotin}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SuraList;
