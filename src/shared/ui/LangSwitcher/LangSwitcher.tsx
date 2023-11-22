import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTranslation } from 'react-i18next';
import { Lang } from '@/shared/assets/icons/navbar';

import cls from './LangSwitcher.module.scss';

export const LangSwitcher = React.memo(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const { i18n } = useTranslation();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const toggle = async (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      // anchorOrigin={{
      //   vertical: 'top',
      //   horizontal: 'right',
      // }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      className={cls.modalLang}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          toggle('uz');
        }}
      >
        Latin
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          toggle('kr');
        }}
      >
        Крилл
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div onClick={handleProfileMenuOpen}>
        <Lang className={cls.icon} />
      </div>
      {renderMenu}
    </Box>
  );
});
