import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="mb-4 py-5 md:mb-0">
                        <h1 className="text-lg font-bold">Контактная информация</h1>
                        <p>Email: kabylbek.470@gmail.com</p>
                        <p>Телефон: +996 (552) 10-21-79</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-lg font-bold">Социальные сети</h1>
                        <div className="flex space-x-4 p-3">
                            <a href="#" className="hover:text-gray-400 text-2xl"><ImFacebook2 /></a>
                            <a href="https://www.instagram.com/taalaibekovichk?igsh=d2gyNnFxd2QyeXh0" className="hover:text-gray-400  text-2xl"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-400 text-2xl"><BsTwitterX /> </a>
                            <a href="#" className="hover:text-gray-400 text-2xl"><FaTelegram /></a>

                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <h1 className="text-center font-bold">О нас</h1>
                        <p className="text-sm">Мы предоставляем лучшие товары для вашего комфорта и стиля.</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Ваш Название Сайта. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
