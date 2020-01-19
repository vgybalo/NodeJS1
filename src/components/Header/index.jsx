import React, { Component } from 'react';
import styles from './styles.module.scss';
import logoPng from './image/logo.png';

export default class extends Component{
    
    render(){       
        return (
            <div >
                <header>       
                    <div className={styles.main_menu}>
                        <div className={styles.container}>
                            <div className={styles.content_menu}>
                                <a href="./" class={styles.logo}><img src={logoPng} alt="logo" /></a>                    
                                <div className={styles.mobile_menu}>
                                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="23" height="2" rx="1" fill="#222B3A"/>
                                    <rect y="7" width="23" height="2" rx="1" fill="#222B3A"/>
                                    <rect x="5" y="14" width="18" height="2" rx="1" fill="#222B3A"/>
                                    </svg>
                                    </div>
                                <nav>
                                    <a href="./">Главная</a>
                                    <a href="./">Материалы для вас</a>
                                    <a href="./">Календарь курсов</a>
                                    <a href="./">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M6.99979 6.49275C8.79272 6.49275 10.2462 5.0393 10.2462 3.24638C10.2462 1.45345 8.79272 0 6.99979 0C5.20687 0 3.75342 1.45345 3.75342 3.24638C3.75342 5.0393 5.20687 6.49275 6.99979 6.49275Z" fill="#222B3A"/>
                                                <path d="M6.99978 8.11597C3.7501 8.11597 1.11572 10.7503 1.11572 14H12.8838C12.8838 10.7503 10.2495 8.11597 6.99978 8.11597Z" fill="#222B3A"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="14" height="14" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Войти
                                    </a>
                                </nav>   
                            </div>                    
                        </div>
                    </div>
                </header>
            </div>        
        )
    }
}