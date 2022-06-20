import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TelegramSvg } from './../../assets/icons/telegram.svg';
import { ReactComponent as WhatsappSvg } from './../../assets/icons/whatsapp.svg';
import { ReactComponent as InstagramSvg } from './../../assets/icons/instagram.svg';
import { useSelector } from 'react-redux';
import cls from './Footer.module.css';

const Footer = () => {
  const footerData = useSelector((state) => state.commerce.data);

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <div>
          <Link to="/">
            <img src={footerData.footerLogo} alt="footerLogo" />
          </Link>

          <p className={cls.dev_text}>Developed by Zeon 2022</p>
        </div>
        <div>
          <span className={cls.main_title}>Компания</span>
          <p className={cls.title}>
            <Link style={{ color: '#ffffff' }} to="/about">
              О нас
            </Link>
          </p>
          <p className={cls.title}>
            <Link style={{ color: 'white' }} to="/news">
              Новости
            </Link>
          </p>
          <p className={cls.title}>
            <Link style={{ color: 'white' }} to="/help">
              Помощь
            </Link>
          </p>
        </div>
        <div>
          <span className={cls.main_title}>Контакты</span>
          {footerData.mobile?.map((item) => (
            <p className={cls.title} key={item.id}>
              <img style={{ marginRight: 5 }} src={item.image} alt="svg" />
              <a style={{ color: 'white' }} href={item.title}>
                {item.data}
              </a>
            </p>
          ))}
        </div>
        <div>
          <span className={cls.main_title}>Мы в социальных сетях:</span>

          <a
            className={cls.footer_link}
            target={'_blank'}
            href={footerData.socialMedia?.instagram}
            alt="/"
            rel="noreferrer"
          >
            <p className={cls.title}>
              <InstagramSvg style={{ marginRight: 5 }} />
              {footerData.socialMedia?.instagramTitle}
            </p>
          </a>

          <a
            className={cls.footer_link}
            target={'_blank'}
            href={footerData.socialMedia?.telegram}
            rel="noreferrer"
          >
            <p className={cls.title}>
              <TelegramSvg style={{ marginRight: 5 }} />
              {footerData.socialMedia?.telegramTitle}
            </p>
          </a>

          <a
            className={cls.footer_link}
            target={'_blank'}
            href={footerData.socialMedia?.whatsapp}
            rel="noreferrer"
          >
            <p className={cls.title}>
              <WhatsappSvg style={{ marginRight: 5 }} />
              {footerData.socialMedia?.whatsappTitle}
            </p>
          </a>
          <hr
            className={cls.divider}
            style={{ color: 'grey', marginTop: 32 }}
          />
          <p className={cls.mob_text}>Developed by Zeon 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
