/* eslint-disable i18next/no-literal-string */
import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import cls from './MobileAppView.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { AppStore, Gmail, GooglePlay, Instagram, 
LeftHomeImg, RightHomeImg, Telegram, TextWithLogo, TextofQuran, Youtobe } from '@/shared/assets/icons/main';
import { ButtonForDownload } from '@/shared/ui/ButtonForDownload';

interface MobileApp{
  className?:string;
}

export const MobileAppView = (prop:MobileApp) => {
  const {className}=prop
  return (
    <div className={classNames(cls.MobileApp,{},[])} >
      {/* BrowserView */}
      <BrowserView>
      <HStack max>
      <HStack>
      <AppImage src={TextofQuran}/>
      <VStack align='center' gap='8'>
      <AppImage src={TextWithLogo}/>
      <ButtonForDownload icon={`${GooglePlay}`}  />
      <ButtonForDownload icon={`${AppStore}`}  />
      <HStack align='center' justify='between' gap='32' >
        <Link target='_blank' to='@hb_programmer'>
          <AppImage  src={Telegram}/>
        </Link>
        <Link target='_blank' to='@hb_programmer'>

      <AppImage src={Instagram}/></Link>

      <Link target='_blank' to='@hb_programmer'>

      <AppImage src={Youtobe}/></Link>

      <Link  target='_blank' to='@hb_programmer'>

      <AppImage src={Gmail}/></Link>
      </HStack>
      </VStack>
      </HStack>
      <HStack gap='32' style={{paddingLeft:'100px'}}>
      <AppImage style={{width:'40%'}} src={LeftHomeImg}/>
      <AppImage style={{width:'60%'}} src={RightHomeImg}/>
      </HStack>
     </HStack>
     </BrowserView>
      {/* end BrowserView */}
     <MobileView>
      <HStack justify='between' gap='8'>
        <ButtonForDownload icon={`${GooglePlay}`}  />
        <ButtonForDownload icon={`${AppStore}`}  />
      </HStack>
     </MobileView>
    </div>
  )
}
