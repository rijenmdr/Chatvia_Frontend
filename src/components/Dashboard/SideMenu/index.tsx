import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorMode,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { RiSunLine } from 'react-icons/ri';

import PrimaryLogoOnly from '../../../../public/images/primary-logo-only.png';
import { menuOne } from '../../../constant/menuItems';
import { useSidebarStore } from '../../../store/sidebar';
import ProfileMenuItem from './ProfileMenuItem';

const menuStyle = {
  cursor: 'pointer',
  width: '56px',
  height: '56px',
  textAlign: 'center',
  lineHeight: '70px',
  borderRadius: '8px',
};

const iconStyle = {
  color: 'gray.500',
  fontSize: '24px',
};

const SideMenu = () => {
  const bgColor = useColorModeValue('light.200', 'dark.100');
  const hoverColor = useColorModeValue('gray.200', 'gray.600');

  const { toggleColorMode } = useColorMode();

  const { activeItem, changeActiveItem } = useSidebarStore((state) => state);

  return (
    <Box
      boxShadow="0 2px 4px rgb(15 34 58 / 12%)"
      display={{ base: 'block', lg: 'flex' }}
      position={{ base: 'fixed', lg: 'static' }}
      bottom="0"
      flexDirection="column"
      alignItems="center"
      bg={bgColor}
      height={{ base: '60px', lg: '100vh' }}
      maxW="75px"
      minW={{ base: '100%', lg: '75px' }}
      minH={{ base: 'auto', lg: '570px' }}
      zIndex={'9'}
    >
      <Box display={{ base: 'none', lg: 'block' }} py="1.5rem">
        <Link href="/dashboard" passHref>
          <Image
            src={PrimaryLogoOnly}
            alt=""
            width={30}
            height={30}
            style={{ objectFit: 'cover', lineHeight: '70px' }}
          />
        </Link>
      </Box>

      <Flex
        my="auto"
        flexDir="column"
        overflowY={{ base: 'initial', lg: 'auto' }}
        overflowX={{ base: 'auto', lg: 'initial' }}
      >
        <Flex flexWrap="wrap" justifyContent={{ base: 'space-evenly', lg: 'center' }} alignItems="center">
          {menuOne.map((menu) => (
            <Tooltip key={menu?.id} label={menu?.label}>
              <Box
                role="group"
                sx={menuStyle}
                bg={activeItem === menu?.label ? hoverColor : 'inherit'}
                margin={{ base: '5px 0', lg: '7px auto' }}
                _hover={{
                  bg: hoverColor,
                }}
                onClick={() => changeActiveItem(menu?.label)}
              >
                <Icon
                  as={menu?.icon}
                  color={activeItem === menu?.label ? 'brand.500' : 'gray.500'}
                  fontSize="24px"
                  _groupHover={{
                    color: 'brand.500',
                  }}
                />
              </Box>
            </Tooltip>
          ))}

          <WrapItem display={{ base: 'block', lg: 'none' }}>
            <ProfileMenuItem />
          </WrapItem>
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }} flexWrap="wrap" justifyContent="center">
          <Menu>
            <Box
              role="group"
              sx={menuStyle}
              margin="7px auto"
              _hover={{
                bg: hoverColor,
              }}
            >
              <MenuButton>
                <Icon
                  as={MdLanguage}
                  sx={iconStyle}
                  _groupHover={{
                    color: 'brand.500',
                  }}
                />
              </MenuButton>
            </Box>
            <MenuList>
              <MenuItem>
                <Image
                  src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                  alt=""
                  width={18}
                  height={12}
                  style={{ marginRight: '1rem' }}
                />
                English
              </MenuItem>
              <MenuItem>
                <Image
                  src="https://purecatamphetamine.github.io/country-flag-icons/3x2/NP.svg"
                  alt=""
                  width={18}
                  height={12}
                  style={{ marginRight: '1rem' }}
                />
                Nepali
              </MenuItem>
              <MenuItem>
                <Image
                  src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
                  alt=""
                  width={18}
                  height={12}
                  style={{ marginRight: '1rem' }}
                />
                Spanish
              </MenuItem>
            </MenuList>
          </Menu>

          <Box
            role="group"
            sx={menuStyle}
            margin="7px auto"
            _hover={{
              bg: hoverColor,
            }}
            onClick={toggleColorMode}
          >
            <Icon
              as={RiSunLine}
              sx={iconStyle}
              _groupHover={{
                color: 'brand.500',
              }}
            />
          </Box>

          <WrapItem margin="7px auto">
            <ProfileMenuItem />
          </WrapItem>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideMenu;
